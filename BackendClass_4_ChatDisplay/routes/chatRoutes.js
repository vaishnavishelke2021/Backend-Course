const express = require("express");
const router = express.Router();
const {
  showChats,
  newChatBtn,
  createChat,
  editChatBtn,
  editChat,
  deleteChat,
} = require("../controllers/chatController");

router.get("/chats", showChats);
router.get("/chats/new", newChatBtn);
router.post("/chats", createChat);
router.get("/chats/:id/edit", editChatBtn);
router.put("/chats/:id", editChat);
router.delete("/chats/:id", deleteChat);

module.exports = router;
