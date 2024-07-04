const mongoose = require("mongoose");

async function connectToMongoDb() {
  try {
    mongoose.connect("mongodb://127.0.0.1/27017/BlogAppdatabase");
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Error: ", e);
    console.log("Error while connecting to MongoDB", e.message);
  }
}

module.exports = connectToMongoDb;
