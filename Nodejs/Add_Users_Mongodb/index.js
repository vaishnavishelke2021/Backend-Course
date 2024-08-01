const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
