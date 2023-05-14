const categorySchema = require("../model/categoryModal");
exports.getcategories = async (req, res, next) => {
  try {
    const data = await categorySchema.find();
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      error: error,
    });
  }
};
exports.getcategory = async (req, res, next) => {
  try {
    const data = await categorySchema
      .findById(req.params.id)
      .populate("products");
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      error: error,
    });
  }
};

exports.postData = async (req, res, next) => {
  try {
    const data = await categorySchema.create(req.body);
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
    const data = await categorySchema.findByIdAndDelete(req.params.id);
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
