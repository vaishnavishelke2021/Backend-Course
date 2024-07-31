const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const PORT = 3000;

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ejs setting
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  fs.readdir(`./files`, (err, files) => {
    // console.log(files);
    res.render("index", { files });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
