"use strict";

const Koa = require("koa");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = new Koa();

app.use(async function (ctx) {
  const str = await prisma.data.findFirst({
    select: {
      randomString: true,
    },
  });
  ctx.body = { hello: str };
});

app.listen(3000);
