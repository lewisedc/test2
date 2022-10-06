const express = require("express");

const app = express();

app.use(express.text());

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.post("/", async (req, res) => {
  console.log(req.body);

  await sleep(1000 * 2);

  res.json(req.body);
});

app.listen("9000", () => console.log("Server listening on port 9000"));
