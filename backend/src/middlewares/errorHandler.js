import { constants } from "../../constants.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const { VALIDATION_ERROR, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, SERVER_ERROR } = constants;
  switch (statusCode) {
    case VALIDATION_ERROR:
      res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
      break;
    case NOT_FOUND:
      res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
      break;
    case UNAUTHORIZED:
      res.json({ title: "Not Authorized to access", message: err.message, stackTrace: err.stack });
      break;
    case FORBIDDEN:
      res.json({ title: "Access forbidden", message: err.message, stackTrace: err.stack });
      break;
    case SERVER_ERROR:
      res.json({ title: "Server Error", message: err.message, stackTrace: err.stack });
      break;

    default:
      console.log("No Error, All good!");
      break;
  }
  // next();
};

export default errorHandler;
