const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next(); //searches for the next middleware
});

app.use((req, res, next) => {
  console.log("in the next middleware");
  res.send("<h1>HELLO WORLD</h1>"); // send is an method that makes req and response easier by doing the hardcoding automatically
});

const server = http.createServer(app); // creating the server
server.listen(3000); // listening to the port
