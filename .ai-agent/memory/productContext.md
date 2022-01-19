# productContext.md

## Extension Ideas

1. **Web UI**: Provide search functionality through a simple web UI
2. **Metrics**: Implement mechanisms to evaluate search quality and performance
3. **Embedding Model Comparison**: Compare performance with other embedding models
4. **Multimodal Support**: Extend to support images and other data types
5. **Data Sync**: Add functionality to sync with remote data sources
6. **Docker Compose Production**: Enhance Docker configuration for production environments with load balancing and high availability
7. **Kubernetes Deployment**: Create Kubernetes manifests for scalable deployment

## Troubleshooting

1. **OPENAI_API_KEY not set error**: Verify that the API key is correctly set in the `.env` file.
2. **ChromaDB client connection error**: Check for version compatibility with ChromaDB.
3. **Docker container not starting**: Verify Docker is running and ports are not in use by other applications.
4. **Connection refused to ChromaDB server**: Ensure the Docker container is running (`docker compose ps`) and the port 8000 is accessible.
5. **Memory errors**: Adjust chunk sizes or switch to streaming processing when handling large amounts of data.
6. **Database permission errors**: Ensure the Docker container has proper permissions to write to the mounted volume.
7. **Database corruption**: If experiencing issues with the database, stop the container (`docker compose down`), delete the `chroma_db` directory to start fresh, and restart the container (`docker compose up -d`). Note that this will remove all indexed data.
