const express = require("express");
const app = express();

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.get("/", async (_, res) => {
  const str = await prisma.data.findFirst({
    select: {
      randomString: true,
    },
  });
  res.send({ hello: str.randomString });
});

app.listen(3000);
