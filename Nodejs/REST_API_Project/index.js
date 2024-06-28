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

// GET /api/users => List all users (for mobile)
// Client Side Rendering
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
