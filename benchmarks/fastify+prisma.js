const fastify = require("fastify")();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

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
  const str = await prisma.data.findFirst({
    select: {
      randomString: true,
    },
  });
  reply.send({ hello: str.randomString });
});

fastify.listen(3000);
