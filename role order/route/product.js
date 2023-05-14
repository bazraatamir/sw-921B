const express = require("express");
const router = express.Router();
const {
  getproduct,
  postData,
  deleteData,
} = require("../controller/productController");
const logger = require("../middleware/logger");

router.route("/").get(getproduct).post(postData);
router.route("/:id").delete(deleteData);
module.exports = router;
