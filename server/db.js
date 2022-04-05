// connecting server with database
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: process.env.PGDB_PASSWORD,
  host: "localhost",
  port: 5432,
  database: "jwt_pg",
});
module.exports = pool;
