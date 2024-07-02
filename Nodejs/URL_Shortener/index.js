const express = require("express");
const app = express();
const urlRoute = require("./routes/urlRoute");
const { connectMongoDb } = require("./connection.js");
const PORT = 3000;
const URL = require("./models/urlModel.js");
const path = require("path");

connectMongoDb("mongodb://localhost:27017/url-shortener").then(() =>
  console.log("Mongodb connected")
);

//ejs
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  res.render("home", { allUrls });
});

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route
app.use("/url", urlRoute);
app.use("/analytics", urlRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectUrl);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
