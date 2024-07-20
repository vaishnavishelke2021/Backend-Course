const express = require("express");
const router = express.Router();
const {
  showChats,
  newChatBtn,
  createChat,
} = require("../controllers/chatController");

router.get("/chats", showChats);
router.get("/chats/new", newChatBtn);
router.post("/chats", createChat);

module.exports = router;
