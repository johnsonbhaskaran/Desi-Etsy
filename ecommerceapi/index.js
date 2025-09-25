import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config.js";
import userRouter from "./routes/user.js";
import authRouter from "./routes/auth.js";
import productRouter from "./routes/product.js";
import cartRouter from "./routes/cart.js";
import orderRouter from "./routes/order.js";

const app = express();
const PORT = process.env.PORT || 5001;

/* -----------------------------------------------------------------/
                    ** MONGO DB connection
/------------------------------------------------------------------*/

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo DB connected successfully");
  })
  .catch((err) => {
    console.error("ERROR: ", err);
  });

/* -----------------------------------------------------------------/
                    ** Middlewares
/------------------------------------------------------------------*/

app.use(json());
app.use(cors());

/* -----------------------------------------------------------------/
                    ** App Routes
/------------------------------------------------------------------*/

app
  .get("/", (req, res) => {
    res.send("Hi This from the express node js framework.");
  })
  .get("/api/v1/test", (req, res) => {
    res.status(200).json({ message: "Hi you have accessed TEST ENDPOINT" });
  })
  .post("/api/v1/test", (req, res) => {
    res.status(201).json({ message: "New product created successfully" });
  });

/* -----------------------------------------------------------------/
                      ** App User Routes from seperate files
  /------------------------------------------------------------------*/

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

/* -----------------------------------------------------------------/
                    ** Server start
/------------------------------------------------------------------*/

app.listen(5000, () => {
  console.log(`Backend Server running on Locahost port: ${PORT}`);
});

/* -----------------------------------------------------------------/
                    * Just exploring the CryptoJS *
/------------------------------------------------------------------*/

// const cipherText = CryptoJS.AES.encrypt("Hi This is top secret", "This the secret KEY").toString();

// console.log("Encrypted text: " + cipherText);

// console.log();

// const decipherText = CryptoJS.AES.decrypt(cipherText, "This the secret KEY");
// const showText = decipherText.toString(CryptoJS.enc.Utf8);

// console.log("Deciphered Text:", showText);
