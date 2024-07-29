const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/adduser", (req, res) => {
  res.render("addUser");
});

router.get("/updateUser", (req, res) => {
  res.render("updateUser");
});

module.exports = router;
