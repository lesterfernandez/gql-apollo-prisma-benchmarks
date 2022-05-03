const {
  ApolloServerPluginDrainHttpServer,
  gql,
} = require("apollo-server-core");
const http = require("http");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    context: { prisma },
    typeDefs: gql`
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: async (_, __, { prisma }) => {
          const str = await prisma.data.findFirst({
            select: {
              randomString: true,
            },
          });
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
