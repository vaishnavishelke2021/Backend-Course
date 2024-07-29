const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const router = require("./routes/routes");
const connectTomongoDB = require("./connection");
const methodOverride = require("method-override");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;

// Log requests
app.use(morgan("tiny"));

// Body parser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Method override
app.use(methodOverride("_method"));

// Set view engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api", router);

// Database connection
connectTomongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
