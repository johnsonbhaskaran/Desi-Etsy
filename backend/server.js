import express, { json } from "express";
import "dotenv/config";
import dbConnect from "./src/config/dbConnect.js";

const app = express();
const PORT = process.env.PORT;

dbConnect();

// Routes
// app.use("/api/user/", userLogin);
// app.use("/api/artisan/", artisanLogin);

// Middlewares
app.use(cors());
app.use(json());

// Setup
app.listen(PORT, () => {
  console.log(`Server running at port: ${PORT}`);
});
