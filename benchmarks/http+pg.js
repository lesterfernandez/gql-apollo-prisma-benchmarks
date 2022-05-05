const { Client } = require("pg");

const server = require("http").createServer(async (_, res) => {
  const client = new Client({
    connectionString:
      "postgresql://postgres:postgres@localhost:5001/prisma",
  });
  await client.connect();
  const query = await client.query(
    'SELECT "randomString" from "Data"'
  );
  const str = query.rows[0].randomString;
  await client.end();
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ hello: str }));
});

server.listen(3000);
