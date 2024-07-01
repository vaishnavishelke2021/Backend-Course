const express = require("express");
const router = express.Router();
const { handleGenerateNewShotURL } = require("../controllers/urlController");

router.post("/", handleGenerateNewShotURL);

module.exports = router;

