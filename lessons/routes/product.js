const express = require("express");
// const uploadPhoto = require('../middlewares/uploadImage');
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
const router = express.Router();
const {protectFun} = require('../middlewares/protect')
const {
  createProduct,
  UpdateProduct,
  DeleteProduct,
  getProduct,
  getallProduct,
} = require("../controller/productCotroller");
router
  .route("/")
  .get(getallProduct)
  .post(protectFun,uploadPhoto.array("images", 5), createProduct);
router.route("/:id").get(getProduct).put(protectFun,UpdateProduct).delete(protectFun,DeleteProduct);

module.exports = router;
