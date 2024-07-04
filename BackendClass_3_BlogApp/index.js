const express = require("express");
const app = express();
const connectToMongoDb = require("./config/connection");

const PORT = 3000;

// database connection
connectToMongoDb();

//middleware
app.use(express.json());

// default route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
