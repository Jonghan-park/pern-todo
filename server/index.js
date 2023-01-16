const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// create a todo

// get all todos

// get a todo

// update a todo

// delete a todo

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
