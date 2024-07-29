const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

//body parser
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname));

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/adduser", (req, res) => {
  res.render("addUser");
});

app.get("/updateUser", (req, res) => {
  res.render("updateUser");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
