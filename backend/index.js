import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookworm",
});

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // allowing only my react app
  })
);

app.get("/books", (req, res) => {
  const select = "SELECT * FROM books";
  db.query(select, (err, data) => {
    if (err) {
      return err;
    } else {
      res.json(data);
    }
  });
});

app.get("/books/:id", (req, res) => {
  const bookID = req.params.id;
  const getSingle = "SELECT * FROM books WHERE `id` = ?";

  db.query(getSingle, [bookID], (err, data) => {
    if (err) {
      return err;
    } else {
      res.json(data);
    }
  });
});

app.post("/books", (req, res) => {
  const insert = "INSERT INTO books (`title`, `rating`,`cover`) VALUES (?)";
  const values = [req.body.title, req.body.rating, req.body.cover];

  db.query(insert, [values], (err, data) => {
    if (err) return err;
    return res.json("Book added to collection");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookID = req.params.id;
  const del = "DELETE FROM books WHERE id = ?";

  db.query(del, [bookID], (err, data) => {
    if (err) return res.json(err);
    return res.json(`Book ${bookID} deleted successfully.`);
  });
});

app.listen(process.env.LOCAL_PORT, () => {
  console.log("Connected to port " + process.env.LOCAL_PORT);
});
