const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.BD_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitforConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;

