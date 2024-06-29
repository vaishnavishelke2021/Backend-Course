const User = require("../models/userModel");

async function handleGetAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { email: "ross@gmail.com" });
  return res.json({ message: "User updated successfully" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ message: "User deleted successfully" });
}

async function handleCreateUser(req, res) {
  const body = req.body; //data sent on frontend is available in req.body

  if (!body || !body.firstName || !body.email) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  //Create user (and add in db)
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
  });

  console.log(result);
  return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
};
