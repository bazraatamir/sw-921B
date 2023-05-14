const express = require("express");
const router = express.Router();
const {
  getorder,
  postData,
  deleteData,
} = require("../controller/orderController");
const logger = require("../middleware/logger");

router.route("/").get(logger,getorder).post(logger,postData);
router.route("/:id").delete(deleteData);
module.exports = router;
