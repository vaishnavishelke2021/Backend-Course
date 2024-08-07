const express = require("express");
const app = express();
const connectToMongoDB = require("./connection");
const path = require("path");
const methodOverride = require("method-override");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//routes
const chatRoutes = require("./routes/chatRoutes");
const Chat = require("./models/chatModel");
app.use("/api/v1", chatRoutes);

//ejs
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

//Mongodb connection
connectToMongoDB();

const PORT = 8080;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
