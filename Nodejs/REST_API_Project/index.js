const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

const PORT = 3000;

// GET /users => HTML Document render (for browser)
// Server Side Rendering
app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  res.send(html);
});

// -----------------------------------------------------------------------------------------
// GET /api/users => List all users (for mobile)
// Client Side Rendering
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// -----------------------------------------------------------------------------------------
app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id); //to get id
  const user = users.find((user) => user.id === id); //find the user
  return res.json(user);
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
