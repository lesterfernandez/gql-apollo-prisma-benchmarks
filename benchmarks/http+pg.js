const pool = require("../lib/pg");

const server = require("http").createServer(async (_, res) => {
  const str = (await pool.query('SELECT "randomString" from "Data"'))
    .rows[0].randomString;
  res.setHeader("content-type", "application/json; charset=utf-8");
  res.end(JSON.stringify({ hello: str }));
});

server.listen(3000);
