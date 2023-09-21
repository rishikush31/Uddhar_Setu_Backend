const express = require("express");
const alertController = require("../controller/alertController");
const auth = require("../utilities/middleware");
const router = express.Router();

router
  .get("/", alertController.getAllAlerts)
  .get("/:id",alertController.getAlertbyId)
  .get("/nearby", alertController.nearbyAlerts)
  .post("/", auth, alertController.createAlert)
  .patch("/:id",auth,alertController.updateAlert)
  .delete("/:id",auth,alertController.deleteAlert);

exports.router = router;
