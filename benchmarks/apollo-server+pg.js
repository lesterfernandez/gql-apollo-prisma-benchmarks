const { ApolloServer } = require("apollo-server");
const { gql } = require("apollo-server-core");

const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://postgres:postgres@localhost:5001/prisma",
});

(async () => {
  const server = new ApolloServer({
    typeDefs: gql`
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: async () => {
          const str = (
            await client.query('SELECT "randomString" from "Data"')
          ).rows[0].randomString;
          return str.randomString;
        },
      },
    },
  });
  await server.listen(3000);
})();
