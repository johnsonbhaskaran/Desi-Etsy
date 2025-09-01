import asyncHandler from "express-async-handler";

const artisanLogin = asyncHandler(async (req, res) => {
  res.json({ message: "Artisan Login" });
});

const artisanRegister = asyncHandler(async (req, res) => {
  res.json({ message: "Artisan Register" });
});

const artisanCurrent = asyncHandler(async (req, res) => {
  res.json({ message: "Artisan Current" });
});

export { artisanCurrent, artisanLogin, artisanRegister };
