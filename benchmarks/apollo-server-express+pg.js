const {
  ApolloServerPluginDrainHttpServer,
  gql,
} = require("apollo-server-core");
const http = require("http");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://postgres:postgres@localhost:5001/prisma",
});

(async () => {
  const app = express();
  const httpServer = http.createServer(app);
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
          return str?.randomString;
        },
      },
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app, path: "/" });
  await new Promise(resolve =>
    httpServer.listen({ port: 3000 }, resolve)
  );
})();
