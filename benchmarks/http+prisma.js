const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const server = require("http").createServer(async (_, res) => {
  res.setHeader("content-type", "application/json; charset=utf-8");
  const str = await prisma.data.findFirst({
    select: {
      randomString: true,
    },
  });
  res.end(JSON.stringify({ hello: str.randomString }));
});

server.listen(3000);
