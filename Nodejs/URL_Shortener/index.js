const express = require("express");
const app = express();
const urlRoute = require("./routes/urlRoute");
const { connectMongoDb } = require("./connection.js");
const PORT = 3000;

connectMongoDb("mongodb://localhost:27017/url-shortener").then(() =>
  console.log("Mongodb connected")
);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route
app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
