// src/embedding/openai.ts
import OpenAI from "openai";
import { getOpenAIApiKey } from "../config";
import { reportMemoryUsage } from "../utils/memory-monitor";

// Initialize OpenAI client with API key
const openai = new OpenAI({
  apiKey: getOpenAIApiKey(),
});

// Model to use for embeddings
const EMBEDDING_MODEL = "text-embedding-3-small";

// Default batch size for processing embeddings to reduce API calls
// Dynamically adjustable default batch size
const DEFAULT_BATCH_SIZE = 32;

// Maximum number of embeddings per API call (OpenAI limit is 2048)
// Actual limit is 2048, but we set it to 100 for safety margin
const MAX_OPENAI_BATCH_SIZE = 100;

// Thresholds for dynamic batch size adjustment based on memory usage
const MEMORY_THRESHOLD_HIGH = 85; // 85% of available memory
const MEMORY_THRESHOLD_LOW = 50;  // 50% of available memory

/**
 * Generate embeddings for a batch of texts using OpenAI's text-embedding-3-small model
 * Optimized for memory efficiency with adaptive batch sizing
 *
 * @param texts Array of text strings to embed
 * @param batchSize Optional custom batch size (default: 3)
 * @returns Array of embedding vectors
 */
/**
 * Calculate memory usage percentage
 * @returns Memory usage percentage (0-100)
 */
function getMemoryUsagePercent(): number {
  const memoryUsage = process.memoryUsage();
  const heapUsed = memoryUsage.heapUsed;
  const heapTotal = memoryUsage.heapTotal;
  return (heapUsed / heapTotal) * 100;
}

/**
 * Dynamically adjust batch size based on memory usage
 * @param currentBatchSize Current batch size
 * @returns Adjusted batch size
 */
function adjustBatchSizeBasedOnMemory(currentBatchSize: number): number {
  const memoryUsage = getMemoryUsagePercent();

  if (memoryUsage > MEMORY_THRESHOLD_HIGH) {
    // Decrease batch size when memory usage is high
    return Math.max(4, Math.floor(currentBatchSize * 0.7));
  } else if (memoryUsage < MEMORY_THRESHOLD_LOW) {
    // Increase batch size when memory usage is low
    return Math.min(MAX_OPENAI_BATCH_SIZE, Math.ceil(currentBatchSize * 1.5));
  }

  // Maintain current batch size when memory usage is within acceptable range
  return currentBatchSize;
}

/**
 * Generate embeddings for a batch of texts using OpenAI's text-embedding-3-small model
 * Optimized for memory efficiency with adaptive batch sizing
 *
 * @param texts Array of text strings to embed
 * @param initialBatchSize Optional custom batch size (default: DEFAULT_BATCH_SIZE)
 * @returns Array of embedding vectors
 */
export async function generateEmbeddings(
  texts: string[],
  initialBatchSize: number = DEFAULT_BATCH_SIZE
): Promise<number[][]> {
  try {
    // Safety check
    if (!texts || texts.length === 0) {
      console.warn("Empty texts array passed to generateEmbeddings");
      return [];
    }

    // Ensure initial batch size is within reasonable limits
    let batchSize = Math.min(Math.max(1, initialBatchSize), MAX_OPENAI_BATCH_SIZE);

    // Process in batches to reduce memory usage and optimize API calls
    const embeddings: number[][] = [];
    const totalTexts = texts.length;
    let processedCount = 0;

    // Process texts in batches with dynamic batch sizing
    while (processedCount < totalTexts) {
      // Dynamically adjust batch size
      batchSize = adjustBatchSizeBasedOnMemory(batchSize);

      const endIdx = Math.min(processedCount + batchSize, totalTexts);
      const batchTexts = texts.slice(processedCount, endIdx);

      console.log(`Processing embedding batch ${Math.ceil(processedCount / batchSize) + 1}/${Math.ceil(totalTexts / batchSize)} with batch size ${batchSize}`);

      // Make API call
      const response = await openai.embeddings.create({
        model: EMBEDDING_MODEL,
        input: batchTexts,
        encoding_format: "float", // Explicitly request float format for consistency
      });

      // Extract embeddings from response
      const batchEmbeddings = response.data.map(item => item.embedding);
      embeddings.push(...batchEmbeddings);

      // Explicitly help garbage collection
      if (response.data) {
        response.data.length = 0;
      }

      // Only run garbage collection when memory usage is very high
      if (getMemoryUsagePercent() > 80 && typeof global.gc === 'function') {
        try {
          console.log("Running garbage collection due to high memory usage");
          global.gc();
        } catch (e) {}
      }

      processedCount = endIdx;
    }

    return embeddings;
  } catch (error) {
    console.error("Error generating embeddings:", error);
    throw new Error(`Failed to generate embeddings: ${error}`);
  }
}

/**
 * Generate embedding for a single text
 * @param text Text to embed
 * @returns Embedding vector
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const embeddings = await generateEmbeddings([text]);
  return embeddings[0] || [];
}

/**
 * Calculate the cosine similarity between two embedding vectors
 * @param embedding1 First embedding vector
 * @param embedding2 Second embedding vector
 * @returns Cosine similarity score (0-1)
 */
export function calculateCosineSimilarity(embedding1: number[], embedding2: number[]): number {
  if (!embedding1 || !embedding2 || embedding1.length !== embedding2.length) {
    throw new Error("Invalid embeddings for similarity calculation");
  }

  // Calculate dot product
  let dotProduct = 0;
  let magnitude1 = 0;
  let magnitude2 = 0;

  for (let i = 0; i < embedding1.length; i++) {
    const val1 = embedding1[i] || 0;
    const val2 = embedding2[i] || 0;
    dotProduct += val1 * val2;
    magnitude1 += val1 * val1;
    magnitude2 += val2 * val2;
  }

  magnitude1 = Math.sqrt(magnitude1);
  magnitude2 = Math.sqrt(magnitude2);

  // Handle zero vectors
  if (magnitude1 === 0 || magnitude2 === 0) {
    return 0;
  }

  // Calculate cosine similarity
  return dotProduct / (magnitude1 * magnitude2);
}
