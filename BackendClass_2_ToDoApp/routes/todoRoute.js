const express = require("express");
const { handleCreateTodo } = require("../controllers/CreateToDo");
const { handleGetTodo } = require("../controllers/GetTodo");
const { handleGetTodoById } = require("../controllers/GetTodoById");
const { handleUpdatTodo } = require("../controllers/UpdateTodo");
const { handleDeleteTodo } = require("../controllers/DeleteTodo");
const router = express.Router();

router.post("/createTodo", handleCreateTodo);
router.get("/getTodo", handleGetTodo);
router.get("/getTodo/:id", handleGetTodoById);
router.put("/updateTodo/:id", handleUpdatTodo);
router.delete("/deleteTodo/:id", handleDeleteTodo);

module.exports = router;
