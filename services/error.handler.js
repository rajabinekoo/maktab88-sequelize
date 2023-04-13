const { AppError } = require("../utils/types");

const errorHandler = (err, req, res, next) => {
  console.log("ok2");
  if (err instanceof AppError) {
    return res
      .status(err.code)
      .send({ message: err.message });
  }
  return res.status(404).send({ message: "Not found" });
};

module.exports = { errorHandler };
