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

con.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});

con.query("SELECT * FROM henkilot", (err, rows) => {
  if (err) throw err;

  console.log("Data received from Db:");
  rows.forEach((row) => {
    console.log(`${row.nimi}, puhelin on ${row.puhelin}`);
  });
});

const henkilo = { nimi: "Ankka Roope", puhelin: "050-1231232" };
con.query("INSERT INTO henkilot SET ?", henkilo, (err, res) => {
  if (err) throw err;

  console.log("Last insert ID:", res.insertId);
});

con.query(
  "UPDATE henkilot SET puhelin = ? Where ID = ?",
  ["044-6544655", 3],
  (err, result) => {
    if (err) throw err;

    console.log(`Changed ${result.changedRows} row(s)`);
  }
);

con.query("DELETE FROM henkilot WHERE id = ?", [5], (err, result) => {
  if (err) throw err;

  console.log(`Deleted ${result.affectedRows} row(s)`);
});

con.query("CALL sp_get_henkilot()", function (err, rows) {
  if (err) throw err;

  rows[0].forEach((row) => {
    console.log(`${row.nimi},  puhelin: ${row.puhelin}`);
  });
  console.log(rows);
});
con.query("CALL sp_get_henkilon_tiedot(1)", (err, rows) => {
  if (err) throw err;

  console.log("Data received from Db:\n");
  console.log(rows[0]);
});

con.query(
  "SET @henkilo_id = 0; CALL sp_insert_henkilo(@henkilo_id, 'Matti Miettinen', '044-5431232'); SELECT @henkilo_id",
  (err, rows) => {
    if (err) throw err;

    console.log("Data received from Db:\n");
    console.log(rows);
  }
);
const userSubmittedVariable = "1"; /*ettÃ¤ kukaan ei voi syÃ¶ttÃ¤Ã¤ tÃ¤tÃ¤:
 const userSubmittedVariable = '1; DROP TABLE henkilot';*/

con.query(
  `SELECT * FROM henkilot WHERE id = ${mysql.escape(userSubmittedVariable)}`,
  (err, rows) => {
    if (err) throw err;
    console.log(rows);
  }
);

con.end((err) => {
  //The connection is terminated gracefully
  //Ensures all remaining queries are executed
  //Then sends a quit packet to the MySQL server.
});

let data = [
  { id: 1, firstName: "Matti", lastName: "Ruohonen" },
  { id: 2, firstName: "Teppo", lastName: "Ruohonen" },
];
const express = require("express");
const bodyParser = require("body-parser");
const app = express().use(bodyParser.json());
//Â GETÂ allÂ users
app.get("/users", (req, res) => {
  res.json(data);
});
//Â GETÂ aÂ user
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = data.find((user) => user.id === id);
  res.json(user ? user : { message: "NotÂ found" });
});
//Â ADDÂ aÂ user
app.post("/users", (req, res) => {
  const user = req.body;
  data.push(user);
  res.json(data);
});
//Â UPDATEÂ aÂ user
app.put("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedUser = req.body;
  data = data.map((user) => (user.id === id ? updatedUser : user));
  res.json(data);
});
//Â DELETEÂ aÂ user
app.delete("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  data = data.filter((user) => user.id !== id);
  res.json(data);
});
app.listen(3306, () => {
  console.log("ServerÂ listeningÂ atÂ portÂ 3306");
});

// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
