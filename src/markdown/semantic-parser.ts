// src/markdown/semantic-parser.ts

/**
 * Represents a node in the Markdown document structure
 */
export interface MarkdownNode {
  type: 'heading' | 'paragraph' | 'list' | 'codeblock' | 'blockquote' | 'table' | 'horizontal_rule';
  level?: number; // For headings (1-6)
  content: string;
  raw: string; // Original markdown content
  position: {
    start: number;
    end: number;
  };
  parent?: MarkdownNode;
  children?: MarkdownNode[];
  metadata?: Record<string, any>;
}

/**
 * Parse Markdown text into a structured tree of nodes based on semantic elements
 * @param markdown The markdown text to parse
 * @returns Array of MarkdownNode objects representing the document structure
 */
export function parseMarkdownStructure(markdown: string): MarkdownNode[] {
  const nodes: MarkdownNode[] = [];
  let currentPosition = 0;

  // Split markdown by double newlines to get blocks
  const blocks = markdown.split(/\n\n+/);
  
  for (const block of blocks) {
    if (!block.trim()) continue; // Skip empty blocks
    
    const startPosition = markdown.indexOf(block, currentPosition);
    const endPosition = startPosition + block.length;
    currentPosition = endPosition;
    
    // Determine block type and create appropriate node
    const node = createNodeFromBlock(block, startPosition, endPosition);
    if (node) {
      nodes.push(node);
    }
  }

  // Build parent-child relationships based on heading hierarchy
  return buildHierarchy(nodes);
}

/**
 * Creates a MarkdownNode from a block of text
 * @param block The markdown block text
 * @param start Start position in the original text
 * @param end End position in the original text
 * @returns A MarkdownNode object representing the block
 */
function createNodeFromBlock(block: string, start: number, end: number): MarkdownNode | null {
  const trimmedBlock = block.trim();
  if (!trimmedBlock) return null;
  
  // Check for headings
  const headingMatch = trimmedBlock.match(/^(#{1,6})\s+(.+)$/m);
  if (headingMatch && headingMatch[1] && headingMatch[2]) {
    return {
      type: 'heading',
      level: headingMatch[1].length,
      content: headingMatch[2].trim(),
      raw: block,
      position: { start, end }
    };
  }
  
  // Check for code blocks
  if (trimmedBlock.startsWith('```') && trimmedBlock.endsWith('```')) {
    return {
      type: 'codeblock',
      content: trimmedBlock.substring(
        trimmedBlock.indexOf('\n') + 1, 
        trimmedBlock.lastIndexOf('```')
      ).trim(),
      raw: block,
      position: { start, end }
    };
  }
  
  // Check for blockquotes
  if (trimmedBlock.startsWith('>')) {
    return {
      type: 'blockquote',
      content: trimmedBlock.replace(/^>\s?/gm, '').trim(),
      raw: block,
      position: { start, end }
    };
  }
  
  // Check for lists
  if (trimmedBlock.match(/^[-*+]\s/) || trimmedBlock.match(/^\d+\.\s/)) {
    return {
      type: 'list',
      content: trimmedBlock,
      raw: block,
      position: { start, end }
    };
  }
  
  // Check for tables
  if (trimmedBlock.includes('|') && trimmedBlock.includes('---')) {
    return {
      type: 'table',
      content: trimmedBlock,
      raw: block,
      position: { start, end }
    };
  }
  
  // Check for horizontal rules
  if (trimmedBlock.match(/^([-*_]){3,}$/)) {
    return {
      type: 'horizontal_rule',
      content: '',
      raw: block,
      position: { start, end }
    };
  }
  
  // Default to paragraph
  return {
    type: 'paragraph',
    content: trimmedBlock,
    raw: block,
    position: { start, end }
  };
}

/**
 * Builds a hierarchy of nodes based on heading levels
 * @param nodes Flat array of nodes
 * @returns Hierarchical array of nodes with parent-child relationships
 */
function buildHierarchy(nodes: MarkdownNode[]): MarkdownNode[] {
  const rootNodes: MarkdownNode[] = [];
  const headingStack: MarkdownNode[] = [];
  
  for (const node of nodes) {
    // Handle headings specially for hierarchy building
    if (node.type === 'heading') {
      // Pop headings from stack that are same or lower level than current
      while (
        headingStack.length > 0 && 
        headingStack[headingStack.length - 1]?.type === 'heading' &&
        (headingStack[headingStack.length - 1]?.level || 0) >= (node.level || 0)
      ) {
        headingStack.pop();
      }
      
      // If stack empty, this is a root node
      if (headingStack.length === 0) {
        rootNodes.push(node);
      } else {
        // Otherwise, add as child to parent
        const parent = headingStack[headingStack.length - 1];
        if (parent) {
          if (!parent.children) parent.children = [];
          parent.children.push(node);
          node.parent = parent;
        }
      }
      
      // Push current heading to stack
      headingStack.push(node);
    } else {
      // For non-headings, add as child to current heading or as root
      if (headingStack.length === 0) {
        rootNodes.push(node);
      } else {
        const parent = headingStack[headingStack.length - 1];
        if (parent) {
          if (!parent.children) parent.children = [];
          parent.children.push(node);
          node.parent = parent;
        }
      }
    }
  }
  
  return rootNodes;
}

/**
 * Extracts the heading path (breadcrumb) for a node
 * @param node The node to get heading path for
 * @param currentPath Optional current path array
 * @returns Array of heading texts forming the path
 */
export function getHeadingPath(node: MarkdownNode, currentPath: string[] = []): string[] {
  const path: string[] = [...currentPath];
  
  if (node.type === 'heading') {
    path.push(node.content);
  }
  
  return path;
}