const express = require("express");
const studentRouter = require("./student");
const router = express.Router();

router.get("/ping", function (req, res, next) {
  res.send({ message: "pong" });
});
router.use("/students", studentRouter);

module.exports = router;
