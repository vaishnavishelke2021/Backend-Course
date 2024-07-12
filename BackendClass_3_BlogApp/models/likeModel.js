const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", //reference to the post model
  },
  user: {
    type: String,
    required: true,
  },
});

const Like = mongoose.model("Like", likeSchema);
module.exports = Like;
