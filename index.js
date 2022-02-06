const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

const port = 8080;

app.listen(port, () => {
  console.log(`listening on: http://localhost:${port}`);
});
