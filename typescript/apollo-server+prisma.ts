import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { gql } from "apollo-server-core";
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
          const str = await (prisma as PrismaClient).data.findFirst({
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
