const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:postgres@localhost:5001/prisma",
  max: 40, // increased pool size
});

module.exports = pool;
