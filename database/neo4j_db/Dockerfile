FROM neo4j:latest

# Set environment variables
ENV NEO4J_AUTH=neo4j/password

# Create a directory for the script
WORKDIR  /code

# Copy the script into the container
COPY populateNEO.cql /code/

# Run the script to populate the database
#CMD ["cypher-shell", "-u", "neo4j", "-p", "password", "-f", "/var/lib/neo4j/import/populateNEO.cql"]
