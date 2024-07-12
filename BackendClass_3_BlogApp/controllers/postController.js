const Post = require("../models/postModel");

async function createPost(req, res) {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    const savedPost = await post.save();

    res.json({
      post: savedPost,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

module.exports = { createPost };
