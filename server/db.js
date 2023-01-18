const Pool = require("pg").Pool;
require("dotenv").config();

const POSTGRESQL_PASSWORD = process.env.POSTGRESQL_PASSWORD;

const pool = new Pool({
  user: "jonghan",
  host: "dpg-cf407m14rebfa0qme06g-a.oregon-postgres.render.com",
  password: POSTGRESQL_PASSWORD,
  port: 5432,
  database: "perntodo",
  ssl: "true",
});

module.exports = pool;
