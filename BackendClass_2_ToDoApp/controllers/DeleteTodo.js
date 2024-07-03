const Todo = require("../models/ToDoModel");

async function handleDeleteTodo(req, res) {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);

    res.status(200).json({
      status: "success",
      data: todo,
      message: "Deleted successfully",
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


module.exports = {handleDeleteTodo}