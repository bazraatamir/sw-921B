const express = require("express");
const router = express.Router();
const {
  getcategories,
  getcategory,
  postData,
  deleteData,
} = require("../controller/categoryController");
const logger = require("../middleware/logger");

router.route("/").get(getcategories).post(postData);
router.route("/:id").get(getcategory).delete(deleteData);
module.exports = router;
//mvc
//user username email password
//post title image description
