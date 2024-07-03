const express = require("express");
const app = express();
require("dotenv").config;

// PORT
const PORT = process.env.PORT || 4000;



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
