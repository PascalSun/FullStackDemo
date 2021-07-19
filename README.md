# FullStackDemo

A demo project with the Full Stack setup:

- Frontend: React
- Backend:
  - Hasura for GraphQL
  - Django
  - ASP.NET
- Database:
  - PostgreSQL
  - GraphDB: Neo4j
  - MS SQL Server

All of the stack above are developed with docker.

## How to use it

```
# clone it
cd ./src
docker-compose up
```

- React: http://localhost
- Django: http://localhost/django/admin/
- ASP.NET: http://localhost/asp
- Hasura: http://localhost/gql/

## GraphQL, Hasura

To make sure the export metadata process work, we need to install hasura first on the local machine, [Install Guide](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html).

And to make sure you can use the latest version of the hasura, you may need to update the cli to the latest version.

`hasura update-cli --version v2.0.0-beta.2 --admin-secret fullstackdemopw`

Then everytime you do some update with the hasura settings, (tables, actions), then

`hasura metadata export --admin-secret fullstackdemopw`
