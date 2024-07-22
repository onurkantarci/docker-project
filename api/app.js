const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/users", (req, res) => {
  res.json([
    { name: "Onur", surname: "Kantarci" },
    { name: "Alper", surname: "Kantarci" },
  ]);
});

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
