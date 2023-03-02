import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookworm",
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello Dev!");
});

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

app.post("/post", (req, res) => {
  const insert = "INSERT INTO books (`title`, `rating`,`cover`) VALUES (?)";
  const values = [req.body.title, req.body.rating, req.body.cover];

  db.query(insert, [values], (err, data) => {
    if (err) return err;
    return res.json("Book added to collection");
  });
});

app.listen(process.env.LOCAL_PORT, () => {
  console.log("Connected to port " + process.env.LOCAL_PORT);
});
