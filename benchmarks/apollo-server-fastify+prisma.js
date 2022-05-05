const {
  ApolloServerPluginDrainHttpServer,
  gql,
} = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-fastify");
const fastify = require("fastify");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

function fastifyAppClosePlugin(app) {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

(async () => {
  const app = fastify();
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
          return str.randomString;
        },
      },
    },
    plugins: [
      fastifyAppClosePlugin(app),
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
    ],
  });

  await server.start();
  app.register(server.createHandler({ path: "/" }));
  await app.listen(3000);
})();
