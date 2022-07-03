// src/markdown/adaptive-chunker.ts
import { MarkdownNode, getHeadingPath } from './semantic-parser';

/**
 * Options for adaptive chunking
 */
export interface AdaptiveChunkOptions {
  targetSize?: number;      // Target chunk size in characters
  minSize?: number;         // Minimum chunk size in characters
  maxSize?: number;         // Maximum chunk size in characters
  overlapSize?: number;     // Overlap size between chunks in characters
  respectSemantics?: boolean; // Whether to respect semantic boundaries
  expandHeadings?: boolean; // Whether to include heading context
  source?: string;          // Source of the document
}

/**
 * Result of chunking process containing text and metadata
 */
export interface ChunkResult {
  text: string;
  metadata: {
    source?: string;
    headingPath?: string[];
    position?: {
      start: number;
      end: number;
    };
    contentTypes?: string[];
    previousChunkId?: string;
    nextChunkId?: string;
    chunkIndex: number;
    totalChunks?: number;
  };
  id?: string;
  embedding?: number[];
}

/**
 * Creates adaptive chunks from markdown text, respecting semantic boundaries
 * @param text The markdown text to chunk
 * @param options Chunking options
 * @returns Array of chunks
 */
export function createAdaptiveTextChunks(
  text: string,
  options: AdaptiveChunkOptions = {}
): string[] {
  const {
    targetSize = 700,
    minSize = 300,
    maxSize = 1000,
    overlapSize = 100
  } = options;

  const chunks: string[] = [];
  let currentChunk = '';
  
  // Split text into paragraphs
  const paragraphs = text.split(/\n\s*\n/);
  
  for (const paragraph of paragraphs) {
    const trimmedParagraph = paragraph.trim();
    if (!trimmedParagraph) continue;
    
    // Check if adding this paragraph would exceed max size
    if (currentChunk.length + trimmedParagraph.length > maxSize && currentChunk.length >= minSize) {
      // Finish current chunk
      chunks.push(currentChunk);
      
      // Create overlap for next chunk
      const overlapText = currentChunk.slice(-overlapSize);
      currentChunk = overlapText;
    }
    
    // Add separator if needed
    if (currentChunk && !currentChunk.endsWith('\n')) {
      currentChunk += '\n\n';
    }
    
    // Add paragraph
    currentChunk += trimmedParagraph;
    
    // Check if we've reached target size
    if (currentChunk.length >= targetSize) {
      chunks.push(currentChunk);
      currentChunk = '';
    }
  }
  
  // Add any remaining content
  if (currentChunk) {
    chunks.push(currentChunk);
  }
  
  return chunks;
}

/**
 * Creates adaptive chunks from a tree of markdown nodes
 * @param nodes Array of markdown nodes
 * @param options Chunking options
 * @returns Array of chunk results
 */
export function createAdaptiveNodeChunks(
  nodes: MarkdownNode[],
  options: AdaptiveChunkOptions = {}
): ChunkResult[] {
  const {
    targetSize = 700,
    minSize = 300,
    maxSize = 1000,
    overlapSize = 100,
    source = ''
  } = options;
  
  const chunks: ChunkResult[] = [];
  
  // Flatten node tree and track heading paths
  const flatNodes: Array<{node: MarkdownNode; headingPath: string[]}> = [];
  
  function flattenNodes(node: MarkdownNode, currentPath: string[] = []) {
    // Update path for headings
    let path = [...currentPath];
    if (node.type === 'heading') {
      if (node.level && node.level <= 3) { // Only use h1-h3 for path
        path = getHeadingPath(node, currentPath);
      }
    }
    
    // Add node with its path
    flatNodes.push({
      node,
      headingPath: path
    });
    
    // Process children
    if (node.children && node.children.length > 0) {
      for (const child of node.children) {
        flattenNodes(child, path);
      }
    }
  }
  
  // Flatten all nodes
  for (const node of nodes) {
    flattenNodes(node);
  }
  
  // Create chunks from flat nodes
  let currentChunk: {
    text: string;
    nodes: MarkdownNode[];
    headingPath: string[];
    contentTypes: Set<string>;
    startPosition: number;
    endPosition: number;
  } = {
    text: '',
    nodes: [],
    headingPath: [],
    contentTypes: new Set(),
    startPosition: 0,
    endPosition: 0
  };
  
  // Process each node
  for (let i = 0; i < flatNodes.length; i++) {
    const nodeInfo = flatNodes[i];
    if (!nodeInfo) continue;
    
    const { node, headingPath } = nodeInfo;
    const nodeText = node.content;
    
    // Skip empty nodes
    if (!nodeText.trim()) continue;
    
    // Update current heading path
    currentChunk.headingPath = [...headingPath];
    
    // Check if adding this node would exceed max size
    if (currentChunk.text.length + nodeText.length > maxSize && currentChunk.text.length >= minSize) {
      // Finalize current chunk
      finalizeChunk();
    }
    
    // Add node to current chunk
    currentChunk.text += (currentChunk.text ? '\n\n' : '') + nodeText;
    currentChunk.nodes.push(node);
    currentChunk.contentTypes.add(node.type);
    
    // Update position tracking
    if (currentChunk.nodes.length === 1) {
      currentChunk.startPosition = node.position.start;
    }
    currentChunk.endPosition = node.position.end;
    
    // Check if current chunk is at or above target size
    if (currentChunk.text.length >= targetSize && i < flatNodes.length - 1) {
      finalizeChunk();
    }
  }
  
  // Add any remaining content as the last chunk
  if (currentChunk.text.length > 0) {
    finalizeChunk();
  }
  
  // Add previous/next chunk references
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    if (!chunk) continue;
    
    if (i > 0) {
      const prevChunk = chunks[i-1];
      if (prevChunk) {
        chunk.metadata.previousChunkId = `chunk_${i-1}`;
      }
    }
    
    if (i < chunks.length - 1) {
      const nextChunk = chunks[i+1];
      if (nextChunk) {
        chunk.metadata.nextChunkId = `chunk_${i+1}`;
      }
    }
    
    chunk.metadata.totalChunks = chunks.length;
    chunk.id = `chunk_${i}`;
  }
  
  return chunks;
  
  /**
   * Helper function to finalize the current chunk and start a new one
   */
  function finalizeChunk() {
    const chunkIndex = chunks.length;
    
    chunks.push({
      text: currentChunk.text,
      metadata: {
        source,
        headingPath: currentChunk.headingPath,
        position: {
          start: currentChunk.startPosition,
          end: currentChunk.endPosition
        },
        contentTypes: Array.from(currentChunk.contentTypes),
        chunkIndex
      }
    });
    
    // Start new chunk with overlap
    const overlapText = findOverlapText(currentChunk.text, overlapSize);
    
    currentChunk = {
      text: overlapText,
      nodes: [],
      headingPath: [...currentChunk.headingPath],
      contentTypes: new Set(),
      startPosition: currentChunk.endPosition - overlapText.length,
      endPosition: currentChunk.endPosition
    };
  }
}

/**
 * Find a good overlap text that doesn't cut in the middle of a sentence
 * @param text Text to create overlap from
 * @param overlapSize Desired overlap size
 * @returns Overlap text
 */
function findOverlapText(text: string, overlapSize: number): string {
  if (!text || text.length <= overlapSize) {
    return text;
  }
  
  // Start with the desired overlap size
  let overlap = text.slice(-overlapSize);
  
  // Try to find a sentence boundary
  const sentenceBreaks = ['. ', '! ', '? ', '.\n', '!\n', '?\n'];
  
  for (const breakPoint of sentenceBreaks) {
    const lastBreak = text.lastIndexOf(breakPoint, text.length - (overlapSize / 2));
    if (lastBreak !== -1 && lastBreak > text.length - overlapSize * 2) {
      // Found a good sentence break point
      overlap = text.slice(lastBreak + 1);
      break;
    }
  }
  
  return overlap;
}