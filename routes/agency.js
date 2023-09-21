const express = require("express");
const agencyController = require("../controller/agencyController");
const auth = require("../utilities/middleware");
const router = express.Router();

router
  .get("/", agencyController.getAllAgencies)
  .get("/:id",agencyController.getAgencybyId)
  .get("/nearby", agencyController.nearbyAgencies)
  .post("/", auth, agencyController.addAgency)
  .patch("/:id",auth,agencyController.updateAgency)
  .delete("/:id",auth,agencyController.deleteAgency);

exports.router = router;
