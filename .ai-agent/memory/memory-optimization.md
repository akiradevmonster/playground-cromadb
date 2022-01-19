# Memory Optimization: ChromaDB Markdown Processing

## 1. Overview

This document summarizes the memory optimization for the ChromaDB Markdown processing pipeline. The project evolved from a basic implementation with memory issues to a robust semantic chunking system with stable memory usage.

## 2. Challenges and Solutions

### 2.1 Memory Issues

**Challenge:** JavaScript heap memory errors when processing large Markdown files.

**Solution:**
- Implemented streaming file processing
- Created semantic-aware chunking
- Added memory monitoring and profiling
- Optimized batch sizes for API calls

### 2.2 ChromaDB Integration Issues

**Challenge:** 422 Unprocessable Entity errors when sending data to ChromaDB.

**Solution:**
- Fixed metadata format (ChromaDB only accepts primitive types)
- Implemented metadata cleaning for boolean, number, and string values
- Added validation before database operations
- Enhanced error handling

### 2.3 Processing Quality Issues

**Challenge:** Basic text chunking caused poor semantic coherence and search quality.

**Solution:**
- Implemented semantic-aware Markdown parsing
- Created adaptive chunking algorithm respecting heading hierarchy
- Added paragraph and section boundary detection
- Maintained content overlap between chunks

## 3. Implementation Highlights

### 3.1 Processing Architecture

```
File Loading (Stream) → Semantic Parsing → Adaptive Chunking → Embedding Generation → ChromaDB Storage
```

- **Semantic Parser:** Converts Markdown to hierarchical node structure
- **Adaptive Chunker:** Creates optimally sized chunks respecting document semantics
- **Memory Monitor:** Tracks heap and RSS usage throughout processing

### 3.2 Memory Profile Results

- Initial heap usage: 182 MB
- Final heap usage after processing 9 files: 181 MB (-1 MB)
- Heap growth rate: -0.07 MB/s (slightly decreasing)
- Successfully processed 9 files into 41 semantic chunks

### 3.3 Key Code Improvements

**Metadata Type Cleaning:**
```typescript
// Clean metadata to ensure only primitive types
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
```

**Batch Processing with Memory Management:**
```typescript
// Process in batches to optimize API calls
const BATCH_SIZE = 3; 
for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
  const batchChunks = chunks.slice(i, i + BATCH_SIZE);
  
  // Generate embeddings for the batch
  const embeddings = await generateEmbeddings(chunkTexts);
  
  // Batch upsert into ChromaDB
  await upsertDocuments(collection, ids, documents, embeddings, metadatas);
  
  // Small delay for GC
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Help garbage collection
  if (typeof global.gc === 'function') {
    try { global.gc(); } catch (e) {}
  }
}
```

## 4. Current Status

The optimized system now provides:

- Complete processing pipeline with semantic chunking
- Stable memory usage throughout processing
- Successful integration with ChromaDB
- Working search with quality results
- Comprehensive memory profiling

The system is now robust and ready for larger document collections.

## 5. Performance Optimization

### 5.1 Optimization Approach

To further improve the performance of the Markdown registration process, the following optimizations were implemented:

1. **Docker Resource Optimization**
   - Increased CPU allocation from 2 to 4 cores
   - Increased memory allocation from 2GB to 4GB
   - Increased resource reservations (CPU: 1→2, Memory: 1GB→2GB)

2. **Batch Size Optimization**
   - Increased default OpenAI embedding batch size from 8 to 32
   - Increased maximum batch size from 20 to 100
   - Increased ChromaDB batch size from 20 to 50
   - Implemented dynamic batch size adjustment based on memory usage

3. **Parallel Processing Enhancement**
   - Increased minimum parallel file processing from 1 to 2
   - Introduced chunk-level parallelism (MAX_PARALLEL_CHUNKS = 3)
   - Implemented parallel embedding generation

4. **Chunk Size Optimization**
   - Increased target chunk size from 700 to 1000 characters
   - Increased minimum chunk size from 300 to 500 characters
   - Increased maximum chunk size from 1000 to 1500 characters
   - Increased overlap size from 100 to 150 characters

5. **File Reading Optimization**
   - Increased file reading chunk size from 4096 to 8192 bytes
   - Optimized stream processing with improved backpressure handling

6. **GC Call Optimization**
   - Increased GC call threshold from 70% to 80% memory usage
   - Adjusted memory usage thresholds (HIGH: 80%→85%, LOW: 40%→50%)
   - Removed unnecessary fixed delays

### 5.2 Performance Results

The optimized system was tested with a collection of 165 Markdown files:

- **Processing Time**: 1 minute 42 seconds (102.36 seconds)
- **Total Chunks Processed**: 2,218 semantic chunks
- **Memory Usage**: Stable at around 300MB (heap usage 150-170MB)
- **Parallel Processing**: Effectively utilized 11 concurrent file processes
- **Batch Processing**: Dynamic batch sizes between 22-32 chunks

### 5.3 Key Code Improvements

**Parallel Embedding Generation:**
```typescript
// Process embeddings in parallel sub-batches for better throughput
const embeddings: number[][] = [];

// Split into smaller parallel batches
for (let k = 0; k < chunkBatch.length; k += MAX_PARALLEL_CHUNKS * EMBEDDING_BATCH_SIZE) {
  const parallelBatches: string[][] = [];

  // Create parallel batches
  for (let p = 0; p < MAX_PARALLEL_CHUNKS; p++) {
    const startIdx = k + (p * EMBEDDING_BATCH_SIZE);
    const endIdx = Math.min(startIdx + EMBEDDING_BATCH_SIZE, chunkBatch.length);

    if (startIdx < chunkBatch.length) {
      const batchTexts = chunkBatch.slice(startIdx, endIdx).map(chunk => chunk.text);
      parallelBatches.push(batchTexts);
    }
  }

  // Process parallel batches
  const batchResults = await Promise.all(
    parallelBatches.filter(batch => batch.length > 0)
      .map(batchTexts => generateEmbeddings(batchTexts, EMBEDDING_BATCH_SIZE))
  );

  // Collect results
  batchResults.forEach(result => {
    embeddings.push(...result);
  });
}
```

**Optimized Stream Processing:**
```typescript
// Use a more efficient approach with backpressure handling
fileStream.on('data', (chunk: string) => {
  buffer += chunk;

  // If buffer exceeds twice the chunk size, apply backpressure
  if (buffer.length > chunkSize * 2) {
    fileStream.pause();
  }

  // Process complete chunks without waiting for each one to complete
  while (buffer.length >= chunkSize) {
    const processChunk = buffer.slice(0, chunkSize);
    buffer = buffer.slice(chunkSize);

    // Chain promises to ensure order but don't block the event loop
    processingPromise = processingPromise
      .then(() => chunkProcessor(processChunk))
      .then(() => {
        // Resume stream if it was paused and buffer is now manageable
        if (!fileStream.readableFlowing && buffer.length < chunkSize) {
          fileStream.resume();
        }
      })
      .catch(error => {
        fileStream.destroy();
        reject(error);
      });
  }
});
```

### 5.4 Evaluation

The performance optimization has significantly improved the system's ability to handle large document collections:

- **Scalability**: Successfully processed 165 files with stable memory usage
- **Efficiency**: Parallel processing and optimized batch sizes reduced processing time
- **Reliability**: No memory leaks or crashes during extended processing
- **Resource Usage**: Efficient utilization of available CPU and memory resources

The system now provides a robust foundation for processing even larger document collections with predictable performance characteristics.
