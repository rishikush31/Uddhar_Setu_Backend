const express = require("express");
const requestController = require("../controller/requestController");
const auth = require("../utilities/middleware");
const router = express.Router();

router
  .get("/", requestController.getAllRequests)
  .get("/:id",requestController.getRequestbyId)
  .post("/", auth, requestController.createRequest)
  .patch("/:id",auth,requestController.updateRequest)
  .delete("/:id",auth,requestController.deleteRequest);

exports.router = router;
