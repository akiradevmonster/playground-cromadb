// src/utils/memory-monitor.ts

/**
 * Reports current memory usage with a label for identification
 * Simplified version that just logs to console
 * @param label Label to identify the measurement point
 */
export function reportMemoryUsage(label: string): void {
  const memoryUsage = process.memoryUsage();
  console.log(`Memory usage at ${label}:`);
  console.log(`  RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)} MB`);
  console.log(`  Heap Total: ${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`);
  console.log(`  Heap Used: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`);
}

/**
 * Dummy class to maintain compatibility with existing code
 * Does nothing but provides the same interface
 */
export class MemoryTracker {
  constructor(reportIntervalMs: number = 5000) {
    // Do nothing
  }

  measure(label: string, forceReport: boolean = false): any {
    // Just log the memory usage
    const memoryUsage = process.memoryUsage();
    const heapUsed = Math.round(memoryUsage.heapUsed / 1024 / 1024);
    console.log(`Memory at ${label}: ${heapUsed} MB`);
    return { heapUsed };
  }
  
  exportToFile(filePath: string): Promise<void> {
    return Promise.resolve();
  }
}