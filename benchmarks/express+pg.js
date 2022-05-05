const express = require("express");
const app = express();

const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://postgres:postgres@localhost:5001/prisma",
});

app.post("/", async (_, res) => {
  const str = (
    await client.query('SELECT "randomString" from "Data"')
  ).rows[0].randomString;
  res.send({ hello: str });
});

app.listen(3000);
