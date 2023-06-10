const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'sw921',
  password:"12345678"
}).promise()

module.exports = connection