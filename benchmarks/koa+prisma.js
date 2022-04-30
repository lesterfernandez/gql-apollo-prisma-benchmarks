"use strict";

const Koa = require("koa");
const prisma = require("../lib/prisma/client");

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
