const express = require("express");
const app = express();

app.use(require("express-status-monitor")());

app.get("/", (req, res) => {
  const randomNumber = Math.round(Math.random() * 1000);
  res.send(`<div>
    Go to the sum endpoint:<a href='/${randomNumber}'>${randomNumber}</a>
    <br />
    Go to the status endpoint:<a href='/status'>status</a>
  </div>`);
});

app.get("/:num", (req, res) => {
  const num = req.params.num;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += i;
  }
  res.send(sum.toString());
});

app.listen("3000", () => console.log("listening on port 3000"));
