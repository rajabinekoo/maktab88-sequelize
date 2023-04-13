const { Op, Sequelize } = require("sequelize");
const { Student } = require("../database/models/student");
const { AppError } = require("../utils/types");
const { Invoice } = require("../database/models/invoice");

const getAllStudents = async (req, res, next) => {
  const { page = 1, limit = 10, search = undefined } = req.query;
  const query = {
    offset: (Number(page) - 1) * Number(limit),
    limit: Number(limit),
    include: { model: Invoice },
    attributes: [
      ["id", "uid"],
      "firstName",
      "lastName",
      "nationalCode",
      "createdAt",
      "updatedAt",
    ],
  };
  if (!!search) {
    query.where = {
      [Op.or]: [
        { firstName: { [Op.like]: `%${search}%` } },
        { lastName: { [Op.like]: `%${search}%` } },
      ],
    };
  }
  const newStudent = await Student.findAndCountAll(query);
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
  // const newInvoice = await Invoice.create({
  //   transactionCode: "123",
  //   reserveDate: new Date(),
  // });
  // newStudent.addInvoice(newInvoice);
  res.status(201).send(newStudent);
};

module.exports = { addStudentController, getAllStudents };
