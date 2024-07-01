const express = require("express");
const app = express();
const urlRoute = require("./routes/urlRoute");
const { connectMongoDb } = require("./connection.js");
const PORT = 3000;

connectMongoDb("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
