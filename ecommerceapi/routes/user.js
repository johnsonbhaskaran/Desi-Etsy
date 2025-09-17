import express, { json } from "express";

export const router = express.Router();

router.get("/usertest", (req, res) => {
  res.json({ message: "User test successfully" });
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;

  res.json({ message: `User ${username} created successfully` });
});
