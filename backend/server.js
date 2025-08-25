import express from "express";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

// Routes
app.get("/", (req, res) => {
  res.status(200).json({ message: `You have accessed the homepage successfully` });
});

// Middlewares

// Setup
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
