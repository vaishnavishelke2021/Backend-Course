const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

async function createComment(req, res) {
  try {
    //fetch data
    const { post, user, body } = req.body;

    // create comment object
    const comment = new Comment({
      post,
      user,
      body,
    });

    // save the new comment into database
    const savedComment = await comment.save();

    //find the post by id, add the new comment to its comment array
    const updatePost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment.id } }, //$push : to add new comment in comments array
      { new: true } // to get the updated document
    )
      .populate("comments") //.populate():  to get the comment body
      .exec(); //execute

    res.json({
      post: updatePost,
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({
      error: "Error while creating the comment",
    });
  }
}

module.exports = { createComment };
