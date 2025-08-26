import { constants } from "../../constants.js";

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  const { VALIDATION_ERROR, NOT_FOUND } = constants;
  switch (statusCode) {
    case VALIDATION_ERROR:
      res.json({ title: "Validation Failed", message: err.message, stackTrace: err.stack });
      break;
    case NOT_FOUND:
      res.json({ title: "Not Found", message: err.message, stackTrace: err.stack });
      break;

    default:
      break;
  }
  // next();
};

export default errorHandler;
