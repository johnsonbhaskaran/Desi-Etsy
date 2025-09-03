import asyncHandler from "express-async-handler";
import Buyer from "../models/buyerModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//*@desc Login as Buyer
//@route POST /api/auth/buyer/login
//@access public
const buyerLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "All fields are mandatory!" });
  }

  const buyer = await Buyer.findOne({ email });

  if (buyer && bcrypt.compare(password, buyer.password)) {
    const accessToken = jwt.sign(
      {
        buyer: {
          name: buyer.name,
          email: buyer.email,
          password: buyer.password,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "1m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("email or passsword not valid");
  }
});

//*@desc Register as Buyer
//@route POST /api/auth/buyer/register
//@access public
const buyerRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "All fields are mandatory" });
  }
  const newBuyer = await Buyer.create({ name, email, password });
  newBuyer.save();
  res.status(201).json(newBuyer);
});

//*@desc Current Buyer
//@route GET /api/auth/buyer/current
//*@access private
const buyerCurrent = asyncHandler(async (req, res) => {
  res.json(req.user);
});

export { buyerLogin, buyerRegister, buyerCurrent };
