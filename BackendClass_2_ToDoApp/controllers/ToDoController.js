const Todo = require("../models/ToDoModel");

async function handleCreateTodo(req, res) {
  try {
    const { title, description } = req.body; // get title, description from body
    const response = await Todo.create({ title, description }); //create new Todo obj &binsert in db
    res.status(500).json({
      success: true,
      message: "Todo created successfully",
      data: response,
    });
  } catch (e) {
    console.error("Error: ", e);
    res.status(500).json({
      success: false,
      message: "Error creating todo",
      data: "internal server error",
    });
  }
}

module.exports = { handleCreateTodo };
