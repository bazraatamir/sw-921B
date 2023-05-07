const express = require("express");
const router = express.Router();
const logger = require("../middleware/logger");

const {
  getCategory,
  getCategories,
  createCategory,
} = require("../controller/categoryController");
router.route("/").get(getCategories).post(logger, createCategory);
router.route("/:id").get(getCategory);

module.exports = router;
