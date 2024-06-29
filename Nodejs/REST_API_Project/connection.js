const mongoose = require("mongoose");

async function connectMongoDb(url) {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = { connectMongoDb };
