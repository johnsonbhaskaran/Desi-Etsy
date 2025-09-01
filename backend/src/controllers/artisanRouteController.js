import asyncHandler from "express-async-handler";

//*@desc Login as an Artisan
//@route POST /api/auth/artisan/login
//@access public
const artisanLogin = asyncHandler(async (req, res) => {
  res.json({ message: "Artisan Login" });
});

//*@desc Register as an Artisan
//@route POST /api/auth/artisan/register
//@access public
const artisanRegister = asyncHandler(async (req, res) => {
  res.json({ message: "Artisan Register" });
});

//*@desc Fetch current Artisan
//@route GET /api/auth/artisan/current
//@access public
const artisanCurrent = asyncHandler(async (req, res) => {
  res.json({ message: "Artisan Current" });
});

export { artisanCurrent, artisanLogin, artisanRegister };
