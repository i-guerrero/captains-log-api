// DEPENDENCIES
const express = require("express");
const logsController = require("./controllers/logsController.js");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json()); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the captain's log");
});

app.use("/logs", logsController);

// 404 Error
app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, no page found!" });
});

// EXPORT
module.exports = app;
