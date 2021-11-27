import express from "express";
import App from "../../myfirstreact/src";

const bodyParser = require("body-parser");
const mysql = require("mysql");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Urheilijat",
});

const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get("/urheilijat", function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(
      "SELECT * FROM urheilijat",
      function (error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
  });
});

export default App;
// Starting our server.
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/users so you can see the data.");
});
