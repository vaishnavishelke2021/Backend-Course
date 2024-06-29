const express = require("express");
const app = express();
// const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");

const PORT = 3000;
app.use(express.urlencoded({ extended: false })); //added middleware

// Connection (database & express), it returns a promise
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube-app")
  .then(() => console.log("MongoDB Conneted"))
  .catch((err) => console.log("Error: ", err));

//Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);

//Model:
const User = mongoose.model("User", userSchema); // Create a model using the schema

// -----------------------------------------------------------------------------------------------------
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


//POST request for creating new user in database (postman)
// -----------------------------------------------------------------------------------------
app.post("/api/users", async (req, res) => {
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
app.patch("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedData = req.body;
  //find user to update
  const userIndex = users.findIndex((user) => user.id === id);

  // Update user data (avoid modifying original array directly)
  const updatedUser = { ...users[userIndex], ...updatedData };

  // Replace the user in the array with the updated version
  users[userIndex] = updatedUser;

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    return res.json({ message: "User updated successfully" });
  });
});

// -----------------------------------------------------------------------------------------
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  // find user to delete
  const userIndex = users.findIndex((user) => user.id === id);

  // Remove user from the array
  users.splice(userIndex, 1);

  //   Updated data in MOCK_DATA.json
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    return res.json({ message: "User deleted successfully" });
  });
});

// -----------------------------------------------------------------------------------------
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
