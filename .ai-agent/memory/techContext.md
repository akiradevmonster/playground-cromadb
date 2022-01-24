# techContext.md

## Environment Setup

### 1. Project Initialization

```bash
# Navigate to the project root directory
cd /home/noriaki/workspace/ai-programming/playground-cromadb

# Initialize TypeScript project
pnpm init
pnpm add -D typescript ts-node @types/node
pnpm exec tsc --init
```

### 2. Install Required Packages

```bash
# Install ChromaDB, OpenAI client, and other utilities
pnpm add chromadb openai dotenv markdown-it glob
pnpm add -D @types/markdown-it @types/glob
```

### 3. Environment Variables Setup

Create a `.env` file in the project root with the following content:

```
OPENAI_API_KEY=your_openai_api_key
```

### 4. Docker Setup

To run ChromaDB in a Docker container, create a `docker-compose.yml` file in the project root with the following content:

```yaml
version: '3'

services:
  chroma:
    image: chromadb/chroma
    volumes:
      - ./chroma_db:/data
    ports:
      - "8000:8000"
    restart: unless-stopped
```

Start the ChromaDB server with:

```bash
docker compose up -d
```

Stop the server with:

```bash
docker compose down
```

## Directory Structure

Use the following directory structure for the project:

```
/playground-cromadb
  ├── .env                      # Environment variables
  ├── package.json              # npm package configuration
  ├── tsconfig.json             # TypeScript configuration
  ├── docker-compose.yml        # Docker configuration for ChromaDB
  ├── src/
  │   ├── index.ts              # Search functionality entry point
  │   ├── processor.ts          # Markdown processing entry point
  │   ├── config.ts             # Configuration management
  │   ├── db/
  │   │   ├── chroma-client.ts  # ChromaDB client
  │   │   └── collections.ts    # Collection management
  │   ├── embedding/
  │   │   └── openai.ts         # OpenAI Embedding management
  │   ├── markdown/
  │   │   ├── loader.ts         # Markdown file loader
  │   │   ├── parser.ts         # Markdown parser
  │   │   ├── semantic-parser.ts # Semantic analysis
  │   │   └── adaptive-chunker.ts # Adaptive chunking
  │   ├── profiling/
  │   │   └── memory-profile.ts # Memory profiling
  │   ├── utils/
  │   │   └── memory-monitor.ts # Memory usage monitoring
  │   └── search/
  │       └── query.ts          # Search logic
  ├── data/
  │   └── markdown/             # Sample Markdown files storage
  ├── chroma_db/                # ChromaDB persistent storage (mounted to Docker)
  └── dist/                     # Compiled JavaScript files
