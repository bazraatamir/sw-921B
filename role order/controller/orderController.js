const orderSchema = require("../model/orderModel");
exports.getorder = async (req, res, next) => {
  try {
    const data = await orderSchema.find().populate({ path: "porductInfo" });
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
    let userInfo = req.userID;
    let { productInfo } = req.body;
    const data = await orderSchema.create({
      userInfo: userInfo,
      porductInfo: productInfo,
    });
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteData = async (req, res, next) => {
  try {
    const data = await orderSchema.findByIdAndDelete(req.params.id);
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
