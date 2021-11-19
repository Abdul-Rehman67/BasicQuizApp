const mysql = require("mysql");
module.exports = mysql.createPool({
  host: "localhost",
  user: "root",
  password:"",
  database:"sampledb",
//   multipleStatements: true,
});
