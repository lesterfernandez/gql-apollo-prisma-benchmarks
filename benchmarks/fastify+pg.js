const fastify = require("fastify")();
const pool = require("../lib/pg");

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

fastify.post("/", schema, async (_, reply) => {
  const str = (await pool.query('SELECT "randomString" from "Data"'))
    .rows[0].randomString;
  reply.send({ hello: str });
});

fastify.listen(3000);
