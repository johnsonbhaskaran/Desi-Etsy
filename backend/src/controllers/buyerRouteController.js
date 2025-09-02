import asyncHandler from "express-async-handler";

//*@desc Login as Buyer
//@route POST /api/auth/buyer/login
//@access public
const buyerLogin = asyncHandler(async (req, res) => {
  res.json({ message: "buyer Login" });
});

//*@desc Register as Buyer
//@route POST /api/auth/buyer/register
//@access public
const buyerRegister = asyncHandler(async (req, res) => {
  res.json({ message: "buyer Register" });
});

//*@desc Current Buyer
//@route GET /api/auth/buyer/current
//*@access private
const buyerCurrent = asyncHandler(async (req, res) => {
  res.json({ message: "buyer Current" });
});

export { buyerLogin, buyerRegister, buyerCurrent };
