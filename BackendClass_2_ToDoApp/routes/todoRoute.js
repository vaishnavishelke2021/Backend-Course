const express = require("express");
const { handleCreateTodo } = require("../controllers/ToDoController");
const router = express.Router();

router.post("/createTodo", handleCreateTodo);

module.exports = router;
