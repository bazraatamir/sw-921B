const Category = require("../model/categories");
const MyError = require("../utils/myError");
const asyncHandler = require("../middlewares/asyncHandler");

exports.createCategory = asyncHandler(async (req, res, next) => {
  const newCategory = await Category.create(req.body);
  res.status(200).json({
    success: true,
    data: newCategory,
  });
});
exports.UpdateCategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const Category = await Category.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    data: Category,
  });
});
exports.DeleteCategory = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const Category = await Category.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    data: Category,
  });
});
exports.getallCategory = asyncHandler(async (req, res, next) => {
  const Categories = await Category.find();
  res.status(200).json({
    success: true,
    data: Categories,
  });
});
exports.getCategory = asyncHandler(async (req, res, next) => {
  const Category = await Category.findById(req.params.id);
  if (!Category) {
    throw MyError(`${req.params.id} Id-тай категори байхгүй байна`, 403);
  }
  res.status(200).json({
    success: true,
    data: Category,
  });
});
