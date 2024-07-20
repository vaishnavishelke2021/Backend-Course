const express = require("express");
const app = express();
const connectToMongoDB = require("./connection");

//Mongodb connection
connectToMongoDB();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
