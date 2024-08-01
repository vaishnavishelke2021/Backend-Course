const express = require("express");
const app = express();
const path = require("path");
const connectToMongoDB = require("./connection");
const User = require("./models/userModel");

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
app.get("/users", async (req, res) => {
  const allUsers = await User.find();
  res.render("users", { allUsers });
});

app.post("/create", async (req, res) => {
  const { name, email, image } = req.body;
  const newUser = await User.create({
    name,
    email,
    image,
  });
  res.redirect("/users");
});

//delete user
app.get("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.redirect("/users");
});

//update user
app.get("/edit/:userId", async (req, res) => {
  const user = await User.findOne({ _id: req.params.userId });
  res.render("edit", { user });
});

app.post("/update/:id", async (req, res) => {
  const updateddata = req.body;
  const id = req.params.id;
  let updatedUser = await User.findByIdAndUpdate(id, updateddata, {
    new: true,
  });
  res.redirect("/users");
});

// ------------------------------------------------------------------

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
