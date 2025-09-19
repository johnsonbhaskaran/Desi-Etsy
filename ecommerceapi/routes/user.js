import express from "express";
import "dotenv/config.js";
import CryptoJS from "crypto-js";
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";
import User from "../models/User.js";

const userRouter = express.Router();

/* -----------------------------------------------------------------/
                    * UPDATE user data
                    * - verify with Access Token *
/------------------------------------------------------------------*/

//? Executing thru Middleware VerifyToken
userRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //? Ensuring Encryption. if in case the user wants to change the password along with other details
  if (req.body.password) {
    const cryptedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPT_SECRET_KEY
    ).toString();
    req.body.password = cryptedPassword;
  }

  try {
    //? Pulling User by Id and update data
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      //? When set new: false . It takes second attempt to update the information.
      { new: true }
    );

    res.status(200).json({ updatedUser });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                   * DELETE user data *
/------------------------------------------------------------------*/

userRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    //? Find the user from the DB and delete the document
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                   * GET user data *
/------------------------------------------------------------------*/

userRouter.get("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    //? Find the user from the DB using ID and get the info - ONLY ADMIN
    const user_in_db = await User.findById(req.params.id);

    //? seperating the password from the rest of the others
    const { password, ...others } = user_in_db._doc;

    res.status(200).json({ ...others });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                   * GET ALL users data *
/------------------------------------------------------------------*/

userRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    //? Find all users from the DB and delete the document
    const allUsers_in_db = await User.find();

    res.status(200).json(allUsers_in_db);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default userRouter;
