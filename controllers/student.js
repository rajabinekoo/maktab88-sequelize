const { Student } = require("../database/models/student");
const { AppError } = require("../utils/types");

const getAllStudents = async (req, res, next) => {
  const {page = 1, limit = 10} = req.query;
  const where = { offset: (Number(page) - 1) * Number(limit), limit: Number(limit) };
  const newStudent = await Student.findAndCountAll(where);
  res.send(newStudent);
};

const addStudentController = async (req, res, next) => {
  const targetStudent = await Student.findOne({
    where: { nationalCode: req.body.nationalCode },
  });
  if (!!targetStudent) {
    throw new AppError("Already exists.", 409);
  }
  const newStudent = await Student.create(req.body);
  res.status(201).send(newStudent);
};

module.exports = { addStudentController, getAllStudents };
