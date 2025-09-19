import express from "express";
import CryptoJS from "crypto-js";
import "dotenv/config.js";
import jwt from "jsonwebtoken";
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

  //? Encrypting the user provided password
  const cryptedPassword = CryptoJS.AES.encrypt(password, process.env.CRYPT_SECRET_KEY).toString();

  //? Creating newUser object instance with the User Mongo MODEL
  const newUser = new User({
    username,
    email,
    password: cryptedPassword,
    isAdmin,
  });

  //? Saving the model to the Mongo DB
  try {
    const savedUser = await newUser.save();

    //? sending Success response
    res.status(201).json(savedUser);
  } catch (err) {
    //? sending Err response
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

  //? Try catch block for Promise from MongoDB
  try {
    //? Finding the user for DB using unique username
    const user_from_db = await User.findOne({ username });

    //? Checking for wrong username credentials
    !user_from_db && res.status(401).json("Wrong credentials");

    //? DeCrypting the hashedPassword from DB
    const DEcryptedPassword = CryptoJS.AES.decrypt(
      user_from_db.password,
      process.env.CRYPT_SECRET_KEY
    ).toString(CryptoJS.enc.Utf8);

    //? Checking for wrong password credentials
    password !== DEcryptedPassword && res.status(401).json("Wrong credentials");

    //? JWT token generation
    const accessToken = jwt.sign(
      {
        id: user_from_db.id,
        isAdmin: user_from_db.isAdmin,
      },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: "3d" }
    );

    //? Destructuring password and other details for sending in response
    const { password: password_from_db, ...others } = user_from_db._doc;

    //? Success status as response with user details other than hashedPassword
    res
      .status(200)
      .json({ message: "Login successful", UserDetails: others, AccessToken: accessToken });
  } catch (err) {
    res.status(500).json({ Error: err });
  }
});

export default authRouter;
