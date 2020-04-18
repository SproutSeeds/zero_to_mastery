const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("<h1>Hello</h1>");
  // moves onto the next handlers below.
  next();
});

app.get("/", (req, res) => {
  res.send("testing...");
});

app.listen(3000);
