import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.authHeader.authorization || req.authHeader.Authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESSTOKEN, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User not authorized");
      }
      console.log(decoded);
      req.user = decoded.user;
      next();
    });

    if (!token) {
      res.status(401);
      throw new Error("User not authorized or Token expired");
    }
  }
});

export default validateToken;
