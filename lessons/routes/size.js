const express = require("express");
const router = express.Router();
const {
  createSize,
  UpdateSize,
  DeleteSize,
  getSize,
  getallSize,
} = require("../controller/sizeController");
const {protectFun} = require('../middlewares/protect')
router.route("/").get(getallSize).post(protectFun,createSize);
router.route("/:d").put(protectFun,UpdateSize).delete(protectFun,DeleteSize);

module.exports = router;
