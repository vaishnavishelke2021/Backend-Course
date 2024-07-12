const Like = require("../models/likeModel");
const Post = require("../models/postModel");

async function likePost(req, res) {
  try {
    const { post, user } = req.body;

    const like = new Like({
      post,
      user,
    });

    const savedLike = await like.save();

    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } }, //$push : to add new comment in comments array
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatePost,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}

module.exports = { likePost };
