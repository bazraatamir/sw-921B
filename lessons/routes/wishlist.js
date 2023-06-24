const express = require("express");
const router = express.Router();
const { protectFun } = require("../middlewares/protect");
const {
  addWishlist,
  getWishlist,
  getAllWishlist,
  removeFromWishlist,
} = require("../controller/wishlistController");
router.route("/").get(getWishlist);
router.route("/all").get(getAllWishlist);
router
  .route("/:id")
  .post(protectFun, addWishlist)
  .delete(protectFun, removeFromWishlist);

module.exports = router;
