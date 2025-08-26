const buyerLogin = (req, res) => {
  res.json({ message: "buyer Login" });
};
const buyerRegister = (req, res) => {
  res.json({ message: "buyer Register" });
};
const artisanLogin = (req, res) => {
  res.json({ message: "Artisan Login" });
};
const artisanRegister = (req, res) => {
  res.json({ message: "Artisan Register" });
};

export { buyerLogin, buyerRegister, artisanLogin, artisanRegister };
