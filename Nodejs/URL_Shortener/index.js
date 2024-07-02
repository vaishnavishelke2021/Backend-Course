const express = require("express");
const app = express();
const urlRoute = require("./routes/urlRoute");
const { connectMongoDb } = require("./connection.js");
const PORT = 3000;
const URL = require("./models/urlModel.js");

connectMongoDb("mongodb://localhost:27017/url-shortener").then(() =>
  console.log("Mongodb connected")
);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route
app.use("/url", urlRoute); 
app.use("/analytics", urlRoute); 

app.get("/:shortId", async (req, res) => {
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
