const express = require("express");
const nodemon = require("nodemon");
const app = express();

app.get("/", (req, res) => {
  return res.send(
    "<h1>Hello from Home page  </h1>"
  );
});

app.get("/about", (req, res) => {
  return res.send("<h1>Hello from About Page..</h1>");
});

app.get("/search", (req, res) => {
  return res.send("<h1>Hello from About Page..</h1>");
});

app.listen(8000, () => console.log("Server Started..."));
// const myserver = http.createServer(app);
// myserver.listen(8000,()=> console.log("Server Started..."))
