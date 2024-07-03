const express = require("express");
const app = express();
const connectToMongoDb = require("./config/connection");
require("dotenv").config;

// PORT
const PORT = process.env.PORT || 4000;

// mongodb connection
connectToMongoDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
