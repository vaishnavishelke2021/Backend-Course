const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//log requests
app.use(morgan("tiny"));

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
