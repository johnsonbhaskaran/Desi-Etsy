import asyncHandler from "express-async-handler";
import { Artisan } from "../models/artisanModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//*@desc Register as an Artisan
//@route POST /api/auth/artisan/register
//@access public
const artisanRegister = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    password,
    email,
    phone,
    address: { line1, city, state, pincode },
  } = req.body;

  const newUser = await Artisan.create({
    name,
    image,
    password,
    email,
    phone,
    address: { line1, city, state, pincode },
  });
  newUser.save();
  res.status(201).json(newUser);
});

//*@desc Login as an Artisan
//@route POST /api/auth/artisan/login
//@access public
const artisanLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "All fields are mandatory!" });
  }

  const artisan = await Artisan.findOne({ email });

  // Compare the password with hashed password
  if (artisan && bcrypt.compare(password, artisan.password)) {
    // Generate access token
    const accessToken = jwt.sign(
      {
        artisan: {
          name: artisan.name,
          email: artisan.email,
          password: artisan.password,
        },
      },
      process.env.ACCESSTOKEN,
      { expiresIn: "1m" }
    );

    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or password not valid");
  }
});

//*@desc Fetch current Artisan
//@route GET /api/auth/artisan/current
//*@access private
const artisanCurrent = asyncHandler(async (req, res) => {
  res.json({ message: "Artisan Current" });
});

export { artisanCurrent, artisanLogin, artisanRegister };
