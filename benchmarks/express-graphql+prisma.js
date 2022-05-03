const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: async (_, __, { prisma }) => {
    const str = await prisma.data.findFirst({
      select: {
        randomString: true,
      },
    });
    return str.randomString;
  },
};

const app = express();
app.use(
  "/",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    context: { prisma },
  })
);
app.listen(3000);
