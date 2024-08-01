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

//create route
app.post("/create", (req, res) => {
  //   console.log(req.body);
  fs.writeFile(
    `./files/${req.body.title.split(" ").join("")}.txt`,
    req.body.note,
    (err) => {
      res.redirect("/");
    }
  );
});

//get note detail
app.get("/files/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    res.render("show", { filename: req.params.filename, filedata: filedata });
  });
});

//edit file name
app.get("/edit/:filename", (req, res) => {
  res.render("edit", { filename: req.params.filename });
});

//edit post route
app.post("/edit", (req, res) => {
  fs.rename(
    `./files/${req.body.previous}`,
    `./files/${req.body.new.split(" ").join("")}.txt`,
    (err) => {
      res.redirect("/");
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
