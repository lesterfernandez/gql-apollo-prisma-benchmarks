const {
  ApolloServerPluginDrainHttpServer,
} = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const http = require("http");

const { PrismaClient } = require("@prisma/client");
const { makeSchema, queryType } = require("nexus");
const prisma = new PrismaClient();

const schema = makeSchema({
  types: [
    queryType({
      definition: t => {
        t.string("hello", {
          resolve: async (_, __, { prisma }) => {
            const str = await prisma.data.findFirst({
              select: {
                randomString: true,
              },
            });
            return str.randomString;
          },
        });
      },
    }),
  ],
});

(async () => {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    context: { prisma },
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app, path: "/" });
  await new Promise(resolve =>
    httpServer.listen({ port: 3000 }, resolve)
  );
})();
