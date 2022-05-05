const {
  ApolloServerPluginDrainHttpServer,
} = require("apollo-server-core");
const { ApolloServer } = require("apollo-server-fastify");
const fastify = require("fastify");
const { makeSchema, queryType } = require("nexus");

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
  const app = fastify();
  const server = new ApolloServer({
    context: { prisma },
    schema,
    plugins: [
      fastifyAppClosePlugin(app),
      ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
    ],
  });

  await server.start();
  app.register(server.createHandler({ path: "/" }));
  await app.listen(3000);
})();
