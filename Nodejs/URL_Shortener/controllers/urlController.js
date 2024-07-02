const shortId = require("shortid");
const URL = require("../models/urlModel");

async function handleGenerateNewShotURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url required" });
  const shortID = shortId();

  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

module.exports = { handleGenerateNewShotURL };
