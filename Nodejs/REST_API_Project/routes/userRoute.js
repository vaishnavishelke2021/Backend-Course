const express = require("express");

const router = express.Router();

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
router.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
});

// -----------------------------------------------------------------------------------------
// Read document, get a user by ID
router.get("/api/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  return res.json(user);
});

//POST request for creating new user in database (postman)
// -----------------------------------------------------------------------------------------
router.post("/api/users", async (req, res) => {
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
  return res.status(201).json({ msg: "success" });
});

// -----------------------------------------------------------------------------------------
// Update a document (using put request to update a user)
router.patch("/api/users/:id", async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.json({ message: "User updated successfully" });
});

// -----------------------------------------------------------------------------------------
// Delete a document (using delete request to delete a user)
router.delete("/api/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ message: "User deleted successfully" });
});

module.exports = router;
