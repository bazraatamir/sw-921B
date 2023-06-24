const wishlistSchema = require("../model/wishList");
const User = require("../model/userModel");
const asyncHandler = require("../middlewares/asyncHandler");
const MyError = require("../utils/myError");

exports.addWishlist = asyncHandler(async (req, res, next) => {
  const productId = req.params.id;
  const user = req.user;
  const wishList = await wishlistSchema.findOne({ user: user });
  if (!wishList) {
    wishList = await wishlistSchema.create({ user: user._id });
  }
  const alreadyadded = wishList.products.includes(productId);
  if (alreadyadded) {
    throw new MyError(`бүтээгдэхүүн өмнө нэмэгдсэн байна`, 400);
  }
  const wishlist = await wishlistSchema.findOneAndUpdate(
    { user: user._id },
    { $push: { products: { $each: [productId], $position: 0 } } },
    { upsert: true, new: true }
  );
  res.status(200).json({
    success: true,
    wishlist,
  });
});

exports.getAllWishlist = asyncHandler(async (req, res, next) => {
  let wishList = await wishlistSchema.find().populate("products");

  res.status(200).json({
    success: true,
    wishList,
  });
});
exports.getWishlist = asyncHandler(async (req, res, next) => {
  const user = req.user;
  let wishList = await wishlistSchema
    .findOne({ user: user._id })
    .populate("products");
  if (!wishList) {
    throw new MyError(`хэрэглэгч олдсонгүй`, 400);
  }
  res.status(200).json({
    success: true,
    wishList,
  });
});

// removeFromWishlist controller
exports.removeFromWishlist = async (req, res) => {
  const productId = req.params.id;
  const user = req.user;

  const wishlist = await wishlistSchema.findOneAndUpdate(
    { user: user._id },
    { $pull: { products: { $in: [productId] } } },
    { new: true }
  );
  console.log(wishlist);
  if (!wishlist) {
    throw new MyError("бүтээгдэхүүн олдсонгүй", 400);
  }

  res.status(200).json({ message: "бүтээгдэхүүнийг устаглаа ", wishlist });
};
