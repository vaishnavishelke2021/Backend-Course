const Todo = require("../models/ToDoModel");

async function handleGetTodoById(req, res) {
  try {
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id }); //or findById(id)

    // if not found
    if (!todo) {
      res.status(404).json({
        message: "Todo not found",
        success: false,
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo found",
    });
    
  }catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: e.message,
    });
  }
}

module.exports = { handleGetTodoById };
