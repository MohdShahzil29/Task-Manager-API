const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const http = require("http");

// Dotenv configuration
dotenv.config();

const app = express();

// Database connection
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Created HTTP server and listen on a port
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
