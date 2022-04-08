const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const basicAuth = require("express-basic-auth");

const { docs } = require("./users/users");
const { unauthorizedResponse } = require("./users/functions");

const app = express();
const port = 9000;

app.use(cors());
app.use(express.json({ limit: 1048576 }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));
app.use(basicAuth({ users: docs, unauthorizedResponse }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/file", (req, res) => {
  const splitted = req.body.markdown.Markdowns.split(":");
  const markdown = fs.readFileSync(`./files/${splitted[0]}/${splitted[1]}.md`, {
    encoding: "utf-8",
  });
  res.send({ markdown });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
