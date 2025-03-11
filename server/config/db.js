const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT,
  connectionLimit: 100,
  enableKeepAlive: true,
  keepAliveInitialDelay: 3 * 100,
  maxIdle: 0,
  queueLimit: 100,
});

connection.connect((err, data) => {
  if (err) {
    console.log("Can't connect to the database.");
  }

  connection.query("SELECT * FROM tb_user", (err, data) => {
    console.log(data);
  });

  console.log("connected to the database.");
});

module.exports = connection;
