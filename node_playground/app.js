const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next(); //searches for the next middleware
});

app.use((req, res, next) => {
  console.log("in the next middleware");
});

const server = http.createServer(app); // creating the server
server.listen(3000); // listening to the port
