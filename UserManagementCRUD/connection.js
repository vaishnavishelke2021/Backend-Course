const mongoose = require("mongoose");

async function connectTomongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (e) {
    console.log(e);
  }
}

module.exports = connectTomongoDB;
