const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");

const PORT = 3000;
app.use(express.urlencoded({ extended: false })); //added middleware

// Connection (database & express), it returns a promise
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app")
  .then(() => console.log("MongoDB Conneted"))
  .catch((err) => console.log("Error: ", err));

// routes
app.use(userRouter);

// -----------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
