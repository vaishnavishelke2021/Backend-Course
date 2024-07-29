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

module.exports = { createUser };
