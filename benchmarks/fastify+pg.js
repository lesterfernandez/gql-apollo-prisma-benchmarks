const fastify = require("fastify")();

const schema = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: {
            type: "string",
          },
        },
      },
    },
  },
};

const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://postgres:postgres@localhost:5001/prisma",
});

fastify.post("/", schema, async (_, reply) => {
  const str = (
    await client.query('SELECT "randomString" from "Data"')
  ).rows[0].randomString;
  reply.send({ hello: str });
});

fastify.listen(3000);
