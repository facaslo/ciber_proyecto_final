# Instrucciones
Para correr usar docker-compose up

Para poblar base de datos de NEO4j:

"docker exec -it pfinosql_n4j /bin/bash"

Dentro de la shell interactiva ejecutar:

"cypher-shell -f populateNEO.cql"