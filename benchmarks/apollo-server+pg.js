const { ApolloServer } = require("apollo-server");
const { gql } = require("apollo-server-core");
const pool = require("../lib/pg");

(async () => {
  const server = new ApolloServer({
    typeDefs: gql`
      type Query {
        hello: String
      }
    `,
    resolvers: {
      Query: {
        hello: async () => {
          const str = (
            await pool.query('SELECT "randomString" from "Data"')
          ).rows[0].randomString;
          return str.randomString;
        },
      },
    },
  });
  await server.listen(3000);
})();
