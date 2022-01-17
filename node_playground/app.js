// const http = require("http");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/path", (req, res, next) => {
  //   console.log("in the next middleware");
  res.send(
    '<form action="/" method="POST"><input type="text" name="title"><button>SEND</button></input></form>'
  ); // send is an method that makes req and response easier by doing the hardcoding automatically
});

app.use("/", (req, res, next) => {
  console.log(req.body);
  res.send("First route");
  //   next(); //searches for the next middleware
});

// const server = http.createServer(app); // creating the server
// server.listen(3000); // listening to the port
app.listen(3000);
