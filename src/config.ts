// src/config.ts
import * as dotenv from "dotenv";

dotenv.config();

export function getOpenAIApiKey(): string {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey.trim() === "") {
    throw new Error("OPENAI_API_KEY is not set in the environment variables.");
  }
  return apiKey.replace(/^"(.*)"$/, "$1"); // Remove quotes if present
}
