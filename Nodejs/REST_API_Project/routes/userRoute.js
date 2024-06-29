const express = require("express");
const User = require("../models/userModel");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateUser,
} = require("../controllers/userController");

// -----------------------------------------------------------------------------------------------------
// Read a document (using get request to read all users)
// GET /users => HTML Document render (for browser)
// Server Side Rendering
router.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

// -----------------------------------------------------------------------------------------
// GET /api/users => List all users (for mobile)
// Client Side Rendering
router.get("/api/users", handleGetAllUsers);

// -----------------------------------------------------------------------------------------
// Read document, get a user by ID
router.get("/api/users/:id", handleGetUserById);

//POST request for creating new user in database (postman)
// -----------------------------------------------------------------------------------------
router.post("/api/users", handleCreateUser);

// -----------------------------------------------------------------------------------------
// Update a document (using put request to update a user)
router.patch("/api/users/:id", handleUpdateUserById);

// -----------------------------------------------------------------------------------------
// Delete a document (using delete request to delete a user)
router.delete("/api/users/:id", handleDeleteUserById);

module.exports = router;
