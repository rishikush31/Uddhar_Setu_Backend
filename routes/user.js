const express = require("express");
const userController = require("../controller/userController");

const router = express.Router();

router
  .get("/", userController.getAllUsers)
  .get("/login",userController.login)
  .post("/", userController.createUser);

exports.router = router;
