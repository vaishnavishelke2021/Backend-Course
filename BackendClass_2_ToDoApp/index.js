const express = require("express");
const app = express();
const connectToMongoDb = require("./config/connection");
// require("dotenv").config();

// PORT
const PORT = process.env.PORT || 4000;

// Middlewae to parse json request body
app.use(express.json());

//Import routes
const todoRoute = require("./routes/todoRoute");
// mount the todo API routes
app.use("/api/v1", todoRoute); // will act as => /api/v1/createTodo, /api/v1/deleteTodo, /api/v1/updateTodo

// mongodb connection
connectToMongoDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
