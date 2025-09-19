import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("Token is not valid");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("You are not Authorized");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };
