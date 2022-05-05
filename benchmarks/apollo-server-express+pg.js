const {
  ApolloServerPluginDrainHttpServer,
  gql,
} = require("apollo-server-core");
const http = require("http");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const pool = require("../lib/pg");

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
            await pool.query('SELECT "randomString" from "Data"')
          ).rows[0].randomString;
          return str.randomString;
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
