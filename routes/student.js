const express = require("express");
// const { Student } = require("../database/models/student");
// const { AppError } = require("../utils/types");
const { requestHandler } = require("../services/request.handler");
const { addStudentController } = require("../controller/student");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.send({ result: [] });
});

router.post("/", requestHandler.bind({ controller: addStudentController }));

module.exports = router;
