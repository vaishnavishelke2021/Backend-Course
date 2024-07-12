const express = require("express");
const router = express.Router();
const { createComment } = require("../controllers/commentController");
const { createPost, getAllPost } = require("../controllers/postController");

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPost);

module.exports = router;
