const mongoose = require("mongoose");

async function connectToMongoDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/BlogAppdatabase");
    console.log("Connected to MongoDB");
  } catch (e) {
    console.error("Error: ", e);
    console.log("Error while connecting to MongoDB", e.message);
    process.exit(1); // a function used to terminate the current Node.js process with an exit code of 1
  }
}

module.exports = connectToMongoDb;
