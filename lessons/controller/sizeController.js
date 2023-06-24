const sizeModel = require("../model/sizeModel");
const MyError = require("../utils/myError");
const asyncHandler = require("../middlewares/asyncHandler");

exports.createSize = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  const newsizeModel = await sizeModel.create(req.body);
  res.status(200).json({
    success: true,
    data: newsizeModel,
  });
});
exports.UpdateSize = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const size = await sizeModel.findByIdAndUpdate(id, req.body, { new: true });
  res.status(200).json({
    success: true,
    data: size,
  });
});
exports.DeleteSize = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const size = await sizeModel.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    data: size,
  });
});
exports.getallSize = asyncHandler(async (req, res, next) => {
  const sizes = await sizeModel.find();
  res.status(200).json({
    success: true,
    data: sizes,
  });
});
exports.getSize = asyncHandler(async (req, res, next) => {
  const size = await sizeModel.findById(req.params.id);
  if (!size) {
    throw MyError(`${req.params.id} Id-тай категори байхгүй байна`, 403);
  }
  res.status(200).json({
    success: true,
    data: size,
  });
});
