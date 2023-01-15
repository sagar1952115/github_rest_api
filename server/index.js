const express = require("express");
const app = express();
const Octokit = require("octokit");
const api = require("./routes/api");
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// app.use(bodyParser.json());

// const octokit = new Octokit({
//   auth: "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",
// });

// await octokit.request("GET /rate_limit", {});
// app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/api", api);
app.get("/", function (req, res) {
  res.send("Server is up and running!");
});

// replace 3000 with (process.env.PORT)
app.listen(PORT, function () {
  console.log("Server is listening");
});
