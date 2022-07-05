// src/markdown/parser.ts
// Default chunk size (in characters) - reduced to minimize memory usage
const DEFAULT_CHUNK_SIZE = 250;
// Default chunk overlap (in characters) - reduced to minimize memory usage
const DEFAULT_CHUNK_OVERLAP = 50;

/**
 * Convert markdown to plain text
 * @param markdown Markdown content
 * @returns Plain text
 */
export function markdownToText(markdown: string): string {
  try {
    // Use regex-based approach instead of HTML rendering to reduce memory usage
    return markdown
      .replace(/^#+\s+(.*)$/gm, "$1") // Convert headings to plain text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Convert links to text only
      .replace(/\*\*([^*]+)\*\*/g, "$1") // Remove bold markers
      .replace(/\*([^*]+)\*/g, "$1") // Remove italic markers
      .replace(/`([^`]+)`/g, "$1") // Remove inline code markers
      .replace(/```[\s\S]*?```/g, "") // Remove code blocks
      .replace(/^\s*[-*+]\s+(.*)$/gm, "$1") // Convert list items to plain text
      .replace(/^\s*\d+\.\s+(.*)$/gm, "$1") // Convert numbered list items to plain text
      .replace(/\!\[.*?\]\(.*?\)/g, "") // Remove images
      .replace(/\n{3,}/g, "\n\n") // Normalize multiple newlines
      .replace(/\s+/g, " ") // Normalize whitespace
      .trim();
  } catch (error) {
    console.error("Error converting markdown to text:", error);
    return markdown; // Return original markdown if conversion fails
  }
}

/**
 * Split text into chunks of specified size with overlap
 * @param text Text to chunk
 * @param chunkSize Maximum size of each chunk
 * @param overlap Overlap between chunks
 * @returns Array of text chunks
 */
export function chunkText(
  text: string,
  chunkSize: number = DEFAULT_CHUNK_SIZE,
  overlap: number = DEFAULT_CHUNK_OVERLAP
): string[] {
  // Safety check for input
  if (!text || typeof text !== 'string') {
    console.warn("Invalid text input to chunkText, returning empty array");
    return [];
  }

  // Limit chunk size to prevent array allocation errors
  const MAX_SAFE_CHUNK_SIZE = 10000; // Set a reasonable maximum
  if (chunkSize > MAX_SAFE_CHUNK_SIZE) {
    console.warn(`Chunk size ${chunkSize} exceeds maximum safe size, limiting to ${MAX_SAFE_CHUNK_SIZE}`);
    chunkSize = MAX_SAFE_CHUNK_SIZE;
  }

  // Ensure overlap is smaller than chunk size
  if (overlap >= chunkSize) {
    overlap = Math.floor(chunkSize / 4); // 25% overlap as fallback
    console.warn(`Overlap must be smaller than chunk size, adjusted to ${overlap}`);
  }

  const chunks: string[] = [];

  // Handle small text case
  if (text.length <= chunkSize) {
    chunks.push(text);
    return chunks;
  }

  let startIndex = 0;
  let loopGuard = 0;
  const MAX_LOOPS = 10000; // Prevent infinite loops

  while (startIndex < text.length && loopGuard < MAX_LOOPS) {
    loopGuard++;

    // Calculate end index for current chunk
    let endIndex = Math.min(startIndex + chunkSize, text.length);

    // If we're not at the end of the text, try to find a good break point
    if (endIndex < text.length) {
      // Look for a space to break at
      const spaceIndex = text.lastIndexOf(" ", endIndex);
      if (spaceIndex > startIndex) {
        endIndex = spaceIndex;
      }
    }

    // Safety check for chunk extraction
    if (startIndex >= endIndex) {
      console.warn(`Invalid chunk indices: start=${startIndex}, end=${endIndex}`);
      break;
    }

    try {
      // Add the chunk
      const chunk = text.substring(startIndex, endIndex).trim();
      chunks.push(chunk);
    } catch (error) {
      console.error(`Error creating chunk from indices ${startIndex} to ${endIndex}:`, error);
      break;
    }

    // Move start index for next chunk, accounting for overlap
    startIndex = endIndex - overlap;

    // Make sure we're making progress
    if (startIndex <= 0 || startIndex >= text.length || endIndex >= text.length) {
      break;
    }
  }

  if (loopGuard >= MAX_LOOPS) {
    console.warn("Maximum loop count reached in chunkText, possible infinite loop prevented");
  }

  return chunks;
}

/**
 * Process markdown content: convert to text and split into chunks
 * @param markdown Markdown content
 * @param chunkSize Maximum size of each chunk
 * @param overlap Overlap between chunks
 * @returns Array of text chunks
 */
export function processMarkdown(
  markdown: string,
  chunkSize: number = DEFAULT_CHUNK_SIZE,
  overlap: number = DEFAULT_CHUNK_OVERLAP
): string[] {
  const text = markdownToText(markdown);
  return chunkText(text, chunkSize, overlap);
}
