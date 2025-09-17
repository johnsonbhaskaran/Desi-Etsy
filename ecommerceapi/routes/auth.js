import express from "express";
import CryptoJS from "crypto-js";
import "dotenv/config.js";
import User from "../models/User.js";

const authRouter = express.Router();

/* -----------------------------------------------------------------/
                    * user Auth REGISTER route
/------------------------------------------------------------------*/

authRouter.post("/register", async (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  //? Checking for EMPTY username and email
  if (!username || !email) {
    res.status(400).json({ message: "Please enter username or password" });
    return;
  }

  const cryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();

  //? Creating newUser object instance with the User Mongo MODEL
  const newUser = new User({
    username,
    email,
    password: cryptedPassword,
  });

  //? Saving the model to the Mongo DB
  try {
    const savedUser = await newUser.save();

    // sending Success response
    res.status(201).json(savedUser);
  } catch (err) {
    // sending Err response
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                    * user Auth LOGIN route *
/------------------------------------------------------------------*/

authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //? Checking for EMPTY username and email
  if (!username || !password) {
    res.status(400).json({ message: "Please enter username or password" });
    return;
  }

  try {
    const user_from_db = await User.findOne({ username });

    !user_from_db && res.status(401).json("Wrong credentials");

    const DEcryptedPassword = CryptoJS.AES.decrypt(
      user_from_db.password,
      process.env.SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    password !== DEcryptedPassword && res.status(401).json("Wrong credentials");

    console.log(DEcryptedPassword + " should be = " + password);

    res.status(200).json({ message: "Login successful", UserDetails: user_from_db });
  } catch (err) {
    res.status(500).json({ Error: err });
  }
});

export default authRouter;
