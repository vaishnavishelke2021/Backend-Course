const mongoose = require("mongoose");

async function connectToMongoDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/chatApp");
    console.log("MongoDB Connected!");
  } catch (e) {
    console.error("Error", e);
  }
}

module.exports = connectToMongoDB;
