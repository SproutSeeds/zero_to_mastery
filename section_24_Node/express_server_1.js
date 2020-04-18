const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("getting ROOT");
});

app.get("/profile", (req, res) => {
  res.send("getting profile");
});
app.post("/profile", (req, res) => {
  const user = {
    name: "sally",
    hobby: "silly sally",
  };
  res.send(user);
});

app.listen(3000);
