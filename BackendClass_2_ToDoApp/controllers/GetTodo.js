const Todo = require("../models/ToDoModel");

async function handleGetTodo(req, res) {
  try {
    const todo = await Todo.find({});
    res.status(200).json({
      success: true,
      data: todo,
      message: "Entire TODO data fetched",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: e.message,
    });
  }
}

module.exports = { handleGetTodo };
