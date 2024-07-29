const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/adduser", (req, res) => {
  res.render("addUser");
});
router.post("/adduser", createUser);

module.exports = router;
