const app = require("express")();
const prisma = require("../lib/prisma/client");

// app.disable("etag");
// app.disable("x-powered-by");

app.get("/", async (_, res) => {
  const str = await prisma.data.findFirst({
    select: {
      randomString: true,
    },
  });
  res.send({ hello: str.randomString });
});

app.listen(3000);
