import asyncHandler from "express-async-handler";

const buyerLogin = asyncHandler(async (req, res) => {
  res.json({ message: "buyer Login" });
});
const buyerRegister = asyncHandler(async (req, res) => {
  res.json({ message: "buyer Register" });
});
const artisanLogin = asyncHandler(async (req, res) => {
  res.json({ message: "Artisan Login" });
});
const artisanRegister = asyncHandler(async (req, res) => {
  res.json({ message: "Artisan Register" });
});

export { buyerLogin, buyerRegister, artisanLogin, artisanRegister };
