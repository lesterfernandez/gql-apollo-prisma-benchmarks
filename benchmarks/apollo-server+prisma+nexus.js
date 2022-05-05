const { ApolloServer } = require("apollo-server");

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
  const server = new ApolloServer({
    context: { prisma },
    schema,
  });
  await server.listen(3000);
})();
