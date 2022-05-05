const express = require("express");
const app = express();
const pool = require("../lib/pg");

app.post("/", async (_, res) => {
  const str = (await pool.query('SELECT "randomString" from "Data"'))
    .rows[0].randomString;
  res.send({ hello: str });
});

app.listen(3000);
