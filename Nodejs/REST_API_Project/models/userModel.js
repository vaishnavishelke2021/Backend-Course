const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

//Model:
const User = mongoose.model("User", userSchema); // Create a model using the schema

module.exports = User;
