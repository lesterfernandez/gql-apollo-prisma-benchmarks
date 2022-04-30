const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:postgres@localhost:5001/prisma",
});

module.exports = pool;
