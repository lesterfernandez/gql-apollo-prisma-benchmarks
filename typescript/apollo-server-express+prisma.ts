import { PrismaClient } from "@prisma/client";
import {
  ApolloServerPluginDrainHttpServer,
  gql,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import http from "http";
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
          const str = await (prisma as PrismaClient).data.findFirst({
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
  await new Promise<void>(resolve =>
    httpServer.listen({ port: 3000 }, resolve)
  );
})();
