import express from "express";
import User from "../models/User.js";

const authRouter = express.Router();

/* -----------------------------------------------------------------/
                    ** user Auth REGISTER route
/------------------------------------------------------------------*/

authRouter.post("/register", async (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  // Checking for EMPTY username and email
  if (!username || !email) return;

  // Creating newUser object instance with the User Mongo MODEL
  const newUser = new User({
    username,
    email,
    password,
  });

  // Saving the model to the Mongo DB
  try {
    await newUser.save();
  } catch (err) {
    console.error("ERROR:", err);
  }

  // sending response
  res.json({ message: `Thank you ${username} for registering` });
});

export default authRouter;
