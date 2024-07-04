const express = require("express");
const app = express();
const connectToMongoDb = require("./config/connection");
const blogRoutes = require("./routes/blogRoutes");

const PORT = 3000;

// database connection
connectToMongoDb();

//middleware
app.use(express.json());

// mount route
app.use("/api/v1", blogRoutes);

// default route
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
