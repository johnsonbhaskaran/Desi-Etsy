import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "connected successfull from dbConnect.js" });
  console.log(`router connected successfull`);
});

export default router;
