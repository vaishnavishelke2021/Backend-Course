const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
