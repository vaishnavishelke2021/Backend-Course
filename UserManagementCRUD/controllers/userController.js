const User = require("../models/userModel");

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

module.exports = { createUser, allUsers };
