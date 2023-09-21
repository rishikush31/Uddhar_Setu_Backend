const express = require("express");
const responseController = require("../controller/responseController");
const auth = require("../utilities/middleware");
const router = express.Router();

router
  .get("/", responseController.getAllResponses)
  .get("/:id",responseController.getResponsebyId)
  .post("/", auth, responseController.createResponse)
  .patch("/:id",auth,responseController.updateResponse)
  .delete("/:id",auth,responseController.deleteResponse);

exports.router = router;
