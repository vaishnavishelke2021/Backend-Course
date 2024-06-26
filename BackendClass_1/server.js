const express = require("express");
const app = express();

// server instantiated | To run:  node server.js
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// creating route
app.get("/", (req, res) => {
  res.send("Welcome to my server");
});
