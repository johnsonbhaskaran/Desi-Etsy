import express from "express";
import "dotenv/config.js";
import dbConnect from "./src/config/dbConnect.js";
import cors from "cors";
import artisanRoutes from "./src/routes/artisanRoutes.js";
import buyerRoutes from "./src/routes/buyerRoutes.js";
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
app.use("/api/auth/artisan", artisanRoutes);
app.use("/api/auth/buyer", buyerRoutes);

// Custom Middlewares
app.use(errorHandler);

// Setup
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
