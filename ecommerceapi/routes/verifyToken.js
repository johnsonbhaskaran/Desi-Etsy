import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    jwt.verify(authHeader, process.env.TOKEN_SECRET_KEY, (err, user) => {
      req.user = user;
      next();
    });
  } else {
    res.status(401).send("You are not Authorized");
  }
};

export default verifyToken;
