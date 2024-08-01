const express = require("express");
const app = express();
const path = require("path");
const connectToMongoDB = require("./connection");

const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//db connection
connectToMongoDB();

//routes
app.get("/", (req, res) => {
  res.render("index");
});

// get users
app.get("/users", (req, res) => {
  res.render("users");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
