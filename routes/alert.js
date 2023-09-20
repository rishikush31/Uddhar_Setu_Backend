const express = require("express");
const alertController = require("../controller/alertController");
const auth = require("../utilities/middleware");
const router = express.Router();

router
  .get("/", alertController.getAllAlerts)
  .post("/", auth, alertController.createAlert);

exports.router = router;
