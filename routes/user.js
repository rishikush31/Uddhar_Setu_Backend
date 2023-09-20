const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router
  .get("/", userController.getAllUsers)
  .post("/", userController.createUser);

exports.router = router;
