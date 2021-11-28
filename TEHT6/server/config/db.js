import { createConnection } from "mysql";
const db = createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Urheilijat",
});

export default db;

db.connect(function (err) {
  if (err) throw err;
  db.query("SELECT * FROM Urheilijat", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
