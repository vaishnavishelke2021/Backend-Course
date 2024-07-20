const express = require("express");
const router = express.Router();
const { showChats } = require("../controllers/chatController");

router.get("/chats", showChats);

module.exports = router;
