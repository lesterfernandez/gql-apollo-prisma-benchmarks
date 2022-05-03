const { ApolloServer } = require("apollo-server");
const { gql } = require("apollo-server-core");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async () => {
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
  });
  await server.listen(3000);
})();
