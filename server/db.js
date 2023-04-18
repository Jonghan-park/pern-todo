const Pool = require("pg").Pool;
require("dotenv").config();

const POSTGRESQL_PASSWORD = process.env.POSTGRESQL_PASSWORD;
const POSTGRESQL_HOST = process.env.POSTGRESQL_HOST;

const pool = new Pool({
  user: "jonghan",
  host: POSTGRESQL_HOST,
  password: POSTGRESQL_PASSWORD,
  port: 5432,
  database: "jonghan",
  ssl: "true",
});

module.exports = pool;
