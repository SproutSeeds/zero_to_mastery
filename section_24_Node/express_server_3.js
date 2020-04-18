const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/:id", (req, res) => {
  //   console.log(req.query);
  //   req.body();
  //   console.log(req.headers);
  console.log(req.params);
  res.send("getting ROOT");
});

app.listen(3000);
