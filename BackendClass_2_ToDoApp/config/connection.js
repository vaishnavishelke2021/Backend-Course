const mongoose = require("mongoose");
require("dotenv").config;

async function connectToMongoDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ToDoDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (e) {
    console.error("Error: ", e);
    process.exit(1);
  }
}

module.exports = connectToMongoDb;
