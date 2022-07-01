// src/db/collections.ts
import { ChromaClient, Collection, IncludeEnum } from "chromadb";

const COLLECTION_NAME = "markdown_embeddings";

/**
 * Get or create a collection for storing markdown embeddings
 */
export async function getOrCreateCollection(client: ChromaClient): Promise<Collection> {
  try {
    // Check if collection exists and reuse it
    try {
      const collections = await client.listCollections();
      if (collections.includes(COLLECTION_NAME)) {
        console.log(`Existing collection ${COLLECTION_NAME} found. Reusing it.`);
        const collection = await client.getCollection({
          name: COLLECTION_NAME
        });

        // Log the count of documents in the collection
        const count = await collection.count();
        console.log(`Collection contains ${count} documents.`);

        return collection;
      }
    } catch (error) {
      console.log("Error checking existing collections:", error);
    }

    // Create new collection if it doesn't exist
    console.log(`Creating new collection: ${COLLECTION_NAME}`);
    const collection = await client.createCollection({
      name: COLLECTION_NAME,
      metadata: {
        description: "Embeddings of markdown files",
        created: new Date().toISOString(),
        contentType: "markdown",
        embeddingModel: "text-embedding-3-small"
      }
    });

    return collection;
  } catch (error) {
    console.error("Error creating collection:", error);
    throw error;
  }
}

/**
 * Add or update documents in the collection
 * Optimized for batch operations with error handling
 * Ensures metadata only contains primitive types allowed by ChromaDB (boolean, number, string)
 */
export async function upsertDocuments(
  collection: Collection,
  ids: string[],
  documents: string[],
  embeddings: number[][],
  metadatas?: Record<string, any>[]
): Promise<void> {
  try {
    // Validate input data to prevent API errors
    if (!ids.length || ids.length !== documents.length || ids.length !== embeddings.length) {
      throw new Error("Mismatched array lengths in upsertDocuments");
    }

    if (metadatas && metadatas.length !== ids.length) {
      throw new Error("Metadata array length must match ids array length");
    }

    // Clean metadata to ensure it only contains primitive types allowed by ChromaDB
    const cleanedMetadatas = metadatas ? metadatas.map(metadata => {
      const cleaned: Record<string, boolean | number | string> = {};
      if (metadata) {
        Object.keys(metadata).forEach(key => {
          const value = metadata[key];
          if (
            typeof value === 'string' ||
            typeof value === 'number' ||
            typeof value === 'boolean'
          ) {
            cleaned[key] = value;
          }
        });
      }
      return cleaned;
    }) : Array(ids.length).fill({});

    // Execute upsert operation with cleaned data
    await collection.upsert({
      ids,
      documents,
      embeddings,
      metadatas: cleanedMetadatas
    });
  } catch (error) {
    console.error("Error upserting documents:", error);
    throw error;
  }
}

/**
 * Perform similarity search on the collection
 */
export async function querySimilar(
  collection: Collection,
  queryEmbedding: number[],
  limit: number = 5
): Promise<{
  ids: string[];
  documents: string[];
  distances: number[];
  metadatas: Record<string, any>[];
}> {
  try {
    // Validate input
    if (!queryEmbedding || !queryEmbedding.length) {
      throw new Error("Invalid query embedding");
    }

    // Perform query with proper types
    const results = await collection.query({
      queryEmbeddings: [queryEmbedding],
      nResults: limit,
      include: [IncludeEnum.Documents, IncludeEnum.Distances, IncludeEnum.Metadatas]
    });

    // Format and validate results
    return {
      ids: results.ids?.[0] || [],
      documents: (results.documents?.[0] || []).filter(Boolean) as string[],
      distances: results.distances?.[0] || [],
      metadatas: (results.metadatas?.[0] || []).filter(Boolean) as Record<string, any>[]
    };
  } catch (error) {
    console.error("Error querying collection:", error);
    throw new Error(`Failed to query collection: ${error}`);
  }
}

/**
 * Count documents in the collection
 */
export async function countDocuments(collection: Collection): Promise<number> {
  try {
    return await collection.count();
  } catch (error) {
    console.error("Error counting documents:", error);
    throw new Error(`Failed to count documents: ${error}`);
  }
}

/**
 * Delete documents from the collection
 */
export async function deleteDocuments(
  collection: Collection,
  ids: string[]
): Promise<void> {
  try {
    await collection.delete({
      ids
    });
  } catch (error) {
    console.error("Error deleting documents:", error);
    throw new Error(`Failed to delete documents: ${error}`);
  }
}
