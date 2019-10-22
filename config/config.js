require("dotenv").config(); // this is important!
module.exports = {
  development: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_name,
    host: process.env.db_host,
    dialect: process.env.db_dialect
  },
  test: {
    username: "root",
    password: null,
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    // eslint-disable-next-line
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};