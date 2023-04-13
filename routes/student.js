const express = require("express");
const { requestHandler } = require("../services/request.handler");
const {
  addStudentController,
  getAllStudents,
} = require("../controllers/student");
const { studentValidationSchema } = require("../validations/student");
const { validator } = require("../services/validator");
const { paginationSchema } = require("../validations/global");
const router = express.Router();

router.get(
  "/",
  validator(paginationSchema, "query"),
  requestHandler(getAllStudents)
);

router.post(
  "/",
  validator(studentValidationSchema, "body"),
  requestHandler(addStudentController)
);

module.exports = router;
