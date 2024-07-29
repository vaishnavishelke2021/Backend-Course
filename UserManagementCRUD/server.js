const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const router = require("./routes/routes");
const connectTomongoDB = require("./connection");

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

//routes
app.use("/", router);

//database connection
connectTomongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
