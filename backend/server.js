import express from "express";
import "dotenv/config.js";
import dbConnect from "./src/config/dbConnect.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

dbConnect();

// Routes
// app.use("/api/user/", userLogin);
// app.use("/api/artisan/", artisanLogin);

// Middlewares
app.use(cors());
app.use(express.json());

// Setup
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
