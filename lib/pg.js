const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:postgres@localhost:5001/prisma?connection_limit=5",
  max: 5,
});

module.exports = pool;
