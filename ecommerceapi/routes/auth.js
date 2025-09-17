import express from "express";

const authRouter = express.Router();

/* -----------------------------------------------------------------/
                    ** user Auth REGISTER route
/------------------------------------------------------------------*/

authRouter.post("/register", (req, res) => {
  const { username, email, password, isAdmin } = req.body;

  console.log(username, email, password, isAdmin);
  res.json({ message: `Thank you ${username} for registering` });
});

export default authRouter;
