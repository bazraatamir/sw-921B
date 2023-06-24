const express = require("express");
const router = express.Router();
const {
  createCategory,
  UpdateCategory,
  DeleteCategory,
  getCategory,
} = require("../controller/categoryController");
router.route("/").get(getCategory).post(createCategory);
router.route("/:d").put(UpdateCategory).delete(DeleteCategory);

module.exports = router;
