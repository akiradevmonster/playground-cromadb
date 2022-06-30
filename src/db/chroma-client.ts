// src/db/chroma-client.ts
import { ChromaClient } from "chromadb";

export function createChromaClient(): ChromaClient {
  // ChromaClientの初期化。Docker上のChromaDBサーバーに接続
  return new ChromaClient({ path: "http://localhost:8080" });
}

export async function checkChromaHealth(client: ChromaClient): Promise<boolean> {
  try {
    await client.heartbeat();
    return true;
  } catch (e) {
    return false;
  }
}
