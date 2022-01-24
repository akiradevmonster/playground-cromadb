# systemPatterns.md

## Module Responsibilities

- **config.ts**: Manage configuration and environment validation
- **db/chroma-client.ts**: ChromaDB client instantiation and HTTP connection to Docker container
- **db/collections.ts**: Collection creation, upsert, and query
- **embedding/openai.ts**: OpenAI embedding logic
- **markdown/loader.ts**: Markdown file discovery and loading
- **markdown/parser.ts**: Markdown-to-text conversion and chunking
- **search/query.ts**: Similarity and filtered search
- **index.ts**: Handle search functionality
- **processor.ts**: Handle Markdown processing and registration
- **docker-compose.yml**: ChromaDB server containerization and persistence configuration

## System Architecture (Mermaid Diagram)

```mermaid
flowchart TD
    subgraph CLI Execution
        A1[Start: processor.ts]
        A2[Start: index.ts]
    end
    subgraph Docker Container
        DC[ChromaDB Server]
    end
    subgraph Config & Initialization
        B[config.ts<br>Load env/config]
        C[chroma-client.ts<br>ChromaDB init]
        D[collections.ts<br>Get collection]
    end
    subgraph Data Processing
        E[loader.ts<br>Markdown load]
        F1[semantic-parser.ts<br>Structure analysis]
        F2[adaptive-chunker.ts<br>Semantic chunking]
        G[openai.ts<br>Vectorize]
        H[collections.ts<br>Upsert]
    end
    subgraph Search
        I[query.ts<br>Similarity search]
        J[CLI Output]
    end
    subgraph External Services
        OAI[OpenAI API]
    end

    %% Processor flow
    A1 --> B --> C
    C <--> DC
    C --> D
    D --> E --> F1 --> F2 --> G --> H
    G <--> OAI
    
    %% Search flow
    A2 --> B
    B --> C
    C --> D
    D --> I --> J

    %% Performance Optimization Additions
    subgraph Performance Optimization
        P1[Parallel File Processing]
        P2[Batch Size Optimization]
        P3[Delay & GC Optimization]
        P4[Docker Resource Optimization]
    end

    P1 --> E
    P2 --> G
    P2 --> H
    P3 --> G
    P3 --> H
    P4 --> H
