const express = require("express");
const app = express();

// used to parse req.body  in express PUT or POST
const bodyParser = require('body-parser');

// specifically parse the JSON data and & it to the request.body object
app.use(bodyParser.json());

// server instantiated | To run:  node server.js
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// creating route
app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

// creating post request to post/submit data
app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted successfully");
});
