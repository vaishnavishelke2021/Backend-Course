const express = require("express");
const { handleCreateTodo } = require("../controllers/CreateToDo");
const { handleGetTodo } = require("../controllers/GetTodo");
const { handleGetTodoById } = require("../controllers/GetTodoById");
const router = express.Router();

router.post("/createTodo", handleCreateTodo);
router.get("/getTodo", handleGetTodo);
router.get("/getTodo/:id", handleGetTodoById);

module.exports = router;
