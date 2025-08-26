import express from "express";
import "dotenv/config.js";
import dbConnect from "./src/config/dbConnect.js";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";
import productRoutes from "./src/routes/productRoutes.js";
import errorHandler from "./src/middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 7001;

dbConnect();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products/", productRoutes);
app.use("/api/auth/", authRoutes);

// Custom Middlewares
app.use(errorHandler);

// Setup
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
