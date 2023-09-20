const express = require("express");
const agencyController = require("../controller/agencyController");
const auth = require("../utilities/middleware");
const router = express.Router();

router
  .get("/", agencyController.getAllAgencies)
  .get("/nearby", agencyController.nearbyAgencies)
  .post("/", auth, agencyController.addAgency);

exports.router = router;
