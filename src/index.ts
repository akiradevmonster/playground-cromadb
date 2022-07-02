// src/index.ts
import { getOpenAIApiKey } from "./config";
import { createChromaClient, checkChromaHealth } from "./db/chroma-client";
import { getOrCreateCollection } from "./db/collections";
import { searchSimilarDocuments, formatSearchResults } from "./search/query";
import { processMarkdownFiles } from "./processor";

/**
 * Perform a search based on user input
 */
async function performSearch(collection: any) {
  // Simple CLI search interface
  console.log("\n=== ChromaDB Markdown Search ===");
  console.log("Enter a search query or type 'exit' to quit");

  // Set up readline interface
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prompt for search query
  const askQuestion = () => {
    readline.question("\nSearch query: ", async (query: string) => {
      if (query.toLowerCase() === "exit") {
        console.log("Exiting search...");
        readline.close();
        return;
      }

      try {
        console.log(`Searching for: "${query}"`);
        const results = await searchSimilarDocuments(collection, query);
        console.log(formatSearchResults(results));
      } catch (error) {
        console.error("Error performing search:", error);
      }

      // Ask for another query
      askQuestion();
    });
  };

  askQuestion();
}

/**
 * Initialize search functionality
 */
async function initializeSearch() {
  try {
    console.log("Initializing ChromaDB Markdown Search...");

    // 1. Load configuration and environment variables
    const apiKey = getOpenAIApiKey();
    console.log("OpenAI API key loaded successfully");

    // 2. Initialize ChromaDB client and check health
    const client = createChromaClient();
    const isHealthy = await checkChromaHealth(client);

    if (!isHealthy) {
      throw new Error("ChromaDB client is not healthy");
    }
    console.log("ChromaDB client initialized and healthy");

    // 3. Get or create the collection
    const collection = await getOrCreateCollection(client);
    console.log(`Collection '${collection.name}' ready`);

    // Check if collection has documents
    const count = await collection.count();
    console.log(`Collection contains ${count} documents.`);

    if (count === 0) {
      console.log("Warning: Collection is empty. Please run 'pnpm dev:process' first to process and index Markdown files.");
      console.log("Continuing with search interface, but no results will be returned until documents are indexed.");
    }

    // 4. Perform similarity search via CLI
    await performSearch(collection);

  } catch (error) {
    console.error("Error initializing search:", error);
    process.exit(1);
  }
}

// Run the main function
if (require.main === module) {
  initializeSearch();
}
