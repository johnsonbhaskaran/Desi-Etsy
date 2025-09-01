import asyncHandler from "express-async-handler";

const buyerLogin = asyncHandler(async (req, res) => {
  res.json({ message: "buyer Login" });
});
const buyerRegister = asyncHandler(async (req, res) => {
  res.json({ message: "buyer Register" });
});
const buyerCurrent = asyncHandler(async (req, res) => {
  res.json({ message: "buyer Current" });
});

export { buyerLogin, buyerRegister, buyerCurrent };
