const { Student } = require("../database/models/student");
const { AppError } = require("../utils/types");

const addStudentController = async (req, res, next) => {
  throw new AppError("Bad request.", 400);
  const newStudent = await Student.create(req.body);
  res.send(newStudent);
};

module.exports = { addStudentController };
