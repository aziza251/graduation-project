const express = require("express");
const mysql = require("mysql");
const app = express();

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

const connection = mysql.createConnection({
  host: "",
  user: "root",
  password: "",
  database: "graduation_project",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("cant connect to the database", err);
    return;
  }
  console.log("connected successfully to the database");
});
