"use strict";

const Koa = require("koa");

const app = new Koa();
const pool = require("../lib/pg");

app.use(async function (ctx) {
  const str = (await pool.query('SELECT "randomString" from "Data"'))
    .rows[0].randomString;
  ctx.body = { hello: str };
});

app.listen(3000);
