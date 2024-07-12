const express = require("express");
const router = express.Router();
const { createComment } = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");

router.post("/comments/create", createComment);
router.post("/posts/create", createPost);

module.exports = router;
