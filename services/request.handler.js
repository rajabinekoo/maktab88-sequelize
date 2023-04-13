const { AppError } = require("../utils/types");

const requestHandler = async function (req, res, next) {
  try {
    if (!!this.controller) await this.controller(req, res, next);
    else next();
  } catch (error) {
    if (error instanceof AppError) {
      return next(error);
    }
    next(new AppError("Something went wrong.", 500));
  }
};

module.exports = { requestHandler };
