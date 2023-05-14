const productSchema = require("../model/productModel");
exports.getproduct = async (req, res, next) => {
  try {
    const data = await productSchema.find().populate({ path: "category" });
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

exports.postData = async (req, res, next) => {
  try {
    const data = await productSchema.create(req.body);
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      data: error,
    });
  }
};
exports.deleteData = async (req, res, next) => {
  try {
    const data = await productSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      success: true,
      data: error,
    });
  }
};
//mvc
