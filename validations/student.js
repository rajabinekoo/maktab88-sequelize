const Joi = require("joi");

const studentValidationSchema = Joi.object({
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  nationalCode: Joi.string().length(10).required(),
});

module.exports = { studentValidationSchema };
