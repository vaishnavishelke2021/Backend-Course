const User = require("../models/userModel");

async function addNewUserBtn(req, res) {
  res.render("addUser.ejs");
}

// create user -------------------------------------------
async function createUser(req, res) {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.gender ||
      !req.body.status
    ) {
      return res.status(400).json({ err: "All fields are required" });
    }

    const { name, email, gender, status } = req.body;
    const newUser = await User.create({ name, email, gender, status });
    // res.status(201).json({ msg: "New user added", data: newUser });
    res.redirect("/api/users");
  } catch (e) {
    console.error(e);
    res.status(500).json({ err: "An error occurred while creating the user" });
  }
}

// get all users ================================================
async function allUsers(req, res) {
  try {
    const users = await User.find();
    // res.status(200).json({ msg: "All users", data: users });
    // res.redirect("/api/users");
    res.render("index", { users });
  } catch (e) {
    console.log(e);
    res.status(500).json({ err: "Error getting all users" });
  }
}

// update btn-------------------------------------------------------------------------------------------------------------
async function updateUserBtn(req, res) {
  try {
    let { id } = req.params;
    let updatedUser = await User.findById(id);
    res.render("updateUser.ejs", { updatedUser });
  } catch (e) {
    console.log(e);
    res.json({
      status: "fail",
    });
  }
}

// update user =======================================================
async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { name, email, gender, status } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, gender, status },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ err: "User not found" });
    }
    res.redirect("/api/users");
  } catch (e) {
    console.log(e);
    res.status(500).json({ err: "Error updating the user" });
  }
}

// delete user ==========================================================
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    console.log(deletedUser);
    // res.status(201).json({ msg: "User deleted successfully", data: deletedUser });
    res.redirect("/api/users");
  } catch (e) {
    console.log(e);
    res.status(500).json({ err: "Error deleting the user" });
  }
}

module.exports = {
  createUser,
  allUsers,
  updateUser,
  deleteUser,
  addNewUserBtn,
  updateUserBtn,
};
