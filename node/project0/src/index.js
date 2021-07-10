const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const query = req.query;
  console.log(query);
  res.send(query);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("app is listening on port", PORT);
});
