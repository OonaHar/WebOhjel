const mysql = require("mysql");

// First you need to create a connection to the database
// Be sure to replace 'user' and 'password' with the correct values
const con = mysql.createConnection({
  host: "localhost",
  user: "kt",
  password: "kt123456",
  database: "mysql",
  multipleStatements: true, //out parametria varten aliohjelmassa
});

var express = require("express");

var app = express();

app.get("/footballPlayers", function (req, res) {
  var json_string = {
    players: [
      { name: "Messi", goals: 8 },
      { name: "Ronaldo", goals: 22 },
      { name: "Costa", goals: 20 },
      { name: "Neymar", goals: 13 },
      { name: "Arabi", goals: 6 },
      { name: "Bale", goals: 3 },
      { name: "Toquero", goals: 0 },
    ],
  };
  res.json(json_string);
});

app.listen(3360);
