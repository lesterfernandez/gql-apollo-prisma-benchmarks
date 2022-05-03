const { ApolloServer } = require("apollo-server-koa");
const http = require("http");
const Koa = require("koa");
const {
  ApolloServerPluginDrainHttpServer,
  gql,
} = require("apollo-server-core");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async () => {
  const httpServer = http.createServer();
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
  const app = new Koa();
  server.applyMiddleware({ app });
  httpServer.on("request", app.callback());
  await new Promise(resolve =>
    httpServer.listen({ port: 3000 }, resolve)
  );
})();
