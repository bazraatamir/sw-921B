const productModel = require("../model/productModel");
const MyError = require("../utils/myError");
const asyncHandler = require("../middlewares/asyncHandler");

exports.createProduct = asyncHandler(async (req, res, next) => {
  const { name, description, price, quantity, size } = req.body;
  const files = req.files;
  const sizes = JSON.parse(size);
  const newproductModel = await productModel.create({
    name: name,
    description: description,
    price: price,
    quantity: quantity,
    size: sizes.map((size) => {
      return size;
    }),
    images: files.map((file) => {
      return file.filename;
    }),
  });
  res.status(200).json({
    success: true,
    data: newproductModel,
  });
});

exports.UpdateProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const product = await productModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    success: true,
    data: product,
  });
});

exports.DeleteProduct = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const Product = await productModel.findById(id);
  if (!Product) {
    throw new MyError(`ийм ${id}-тай бүтээдэхүүн олдсонгүй`);
  }
  const deleteProduct = await productModel.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    data: Product,
  });
});

exports.getallProduct = asyncHandler(async (req, res, next) => {
  const queryObj = { ...req.query };
  let queryStr = JSON.stringify(queryObj);
  queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
  console.log(JSON.parse(queryStr));

  const Products = await productModel.find(JSON.parse(queryStr));
  res.status(200).json({
    success: true,
    data: Products,
  });
});
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await productModel.findById(req.params.id);
  if (!product) {
    throw MyError(`${req.params.id} Id-тай категори байхгүй байна`, 403);
  }
  res.status(200).json({
    success: true,
    data: newProducts,
  });
});
// lt lte gt gte
