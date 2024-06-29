const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");
const { connectMongoDb } = require("./connection");

const PORT = 3000;
app.use(express.urlencoded({ extended: false })); //added middleware

// Connection (database & express), it returns a promise
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app");

// routes
app.use(userRouter);

// -----------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
