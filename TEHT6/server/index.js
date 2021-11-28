const express = require("express");
const db = require("./config/db").default;
const cors = require("cors");

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

// Route to get all urheilijat
app.get("/api/get", (req, res) => {
  db.query("SELECT * FROM tiedot", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route to get one post
app.get("/api/getFromId/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM tiedot WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

// Route for creating the post
app.post("/api/create", (req, res) => {
  const etunimi = req.body.etunimi;

  db.query(
    "INSERT INTO urheilijat (etunimi) VALUES (?,?,?)",
    [etunimi],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

// Route to like a post
app.post("/api/paino/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "UPDATE urheilijat SET paino = paino + 1 WHERE id = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

// Route to delete a post

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM urheilijat WHERE id= ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
