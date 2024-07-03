const express = require("express");
const { handleCreateTodo } = require("../controllers/CreateToDo");
const { handleGetTodo } = require("../controllers/GetTodo");
const router = express.Router();

router.post("/createTodo", handleCreateTodo);
router.get("/getTodo", handleGetTodo);

module.exports = router;
