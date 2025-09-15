const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Example API route
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API!" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
