const express = require("express");
const router = express.Router();
const {
  createUser,
  allUsers,
  updateUser,
  deleteUser,
  addNewUserBtn,
  updateUserBtn,
} = require("../controllers/userController");

// Routes
router.get("/users/", allUsers);
router.get("/users/adduser", addNewUserBtn);
router.post("/users", createUser);
router.get("/users/:id/update", updateUserBtn);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
