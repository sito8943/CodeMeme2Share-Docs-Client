const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const basicAuth = require("express-basic-auth");

// firebase
const getFile = require("./config");

const { docs } = require("./users/users");
const { unauthorizedResponse } = require("./users/functions");

const app = express();
const port = 9000;

app.use(cors());
app.options(
  "/file",
  cors({ origin: "http://localhost:3000", methods: "POST", credentials: true })
); // include before other routes
app.use(express.json({ limit: 1048576 }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "build")));
app.use(basicAuth({ users: docs, unauthorizedResponse }));

// allow cross-origin requests
/*app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});*/

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/file", async (req, res) => {
  const splitted = req.body.markdown.Markdowns.split(":");
  const markdown = await getFile(splitted[0], splitted[1]);
  console.log(`${splitted[0]}/${splitted[1]}`);
  res.send({ markdown });
});

app.listen(port, () => {
  console.log(`Sito docs server running ${port}`);
});
