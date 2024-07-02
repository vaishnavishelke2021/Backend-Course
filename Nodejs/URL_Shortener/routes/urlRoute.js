const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShotURL,
  handleGetAnalytics,
} = require("../controllers/urlController");

router.post("/", handleGenerateNewShotURL);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
