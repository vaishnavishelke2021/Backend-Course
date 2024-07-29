const express = require("express");
const router = express.Router();
const { createUser, allUsers } = require("../controllers/userController");

router.get("/", allUsers);

router.get("/adduser", (req, res) => {
  res.render("addUser");
});
router.post("/adduser", createUser);

module.exports = router;
