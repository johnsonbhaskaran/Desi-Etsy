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
                    * GET User stats *
                    * Returns Total no of users/month
/------------------------------------------------------------------*/

userRouter.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const todaysDate = new Date();

  //? Logic -> eg: todaysDate -> Fri Sep 19 2025 10:26:36 GMT+0530 (India Standard Time)
  //? we need last year this date, which is Fri Sep 19 2024 10:26:36 GMT+0530...
  //? so, we take todaysDate subtract the year with one and keeping the rest the same
  const lastYear = new Date(todaysDate.setFullYear(todaysDate.getFullYear() - 1));
  try {
    //? Grouping data from DB with mongoDB aggregation pipeline
    const dataGroup = await User.aggregate([
      {
        $match: {
          createdAt: {
            $gte: lastYear,
          },
        },
      },
      {
        //? projection not project - for understanding
        $project: {
          month: {
            $month: "$createdAt",
          },
        },
      },
      {
        $group: {
          _id: "$month",
          total: {
            $sum: 1,
          },
        },
      },
    ]);

    res.status(200).json({ dataGroup });
  } catch (err) {
    console.log(err);
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
  //? In case of Query Params - new=true
  const query = req.query.new;

  //? Show the latest five documents from the DB - If new=true
  if (query) {
    try {
      //? pulls everything and sorts the latest add users using _id
      const latest_5_Users = await User.find().sort({ _id: -1 }).limit(5);

      return res.status(200).json(latest_5_Users);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  try {
    //? Find all users from the DB
    const allUsers_in_db = await User.find();

    return res.status(200).json(allUsers_in_db);
  } catch (err) {
    return res.status(500).json(err);
  }
});

export default userRouter;
