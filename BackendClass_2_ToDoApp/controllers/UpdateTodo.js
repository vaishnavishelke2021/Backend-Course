const Todo = require("../models/ToDoModel");

async function handleUpdatTodo(req, res) {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      //   { _id: id },
      //   { title, description, updatedAt: Date.now() }
      { _id: id, title, description, updatedAt: Date.now() } // values to update
    );

    res.status(200).json({
      status: "success",
      data: todo,
      message: "Updated successfully",
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

module.exports = { handleUpdatTodo };
