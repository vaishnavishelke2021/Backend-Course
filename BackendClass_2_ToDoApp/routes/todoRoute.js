const express = require("express");
const { handleCreateTodo } = require("../controllers/CreateToDo");
const router = express.Router();

router.post("/createTodo", handleCreateTodo);

module.exports = router;
