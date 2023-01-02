const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "id20091991_admincharger",
  password: "ru(03R!|IJXgB+(#",
  database: "id20091991_adminchargerdb",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected");
});

module.exports = db;
