const categorySchema = require("../model/category");
const MyError = require("../utils/myError");

exports.getCategories = async (req, res, next) => {
  try {
    let data = await categorySchema.find();
    res.json({
      data: data,
    });
  } catch (error) {
    next(error);
  }
};
exports.getCategory = async (req, res, next) => {
  try {
    let data = await categorySchema.findById(req.params.id);
    if (!data) {
      throw new MyError(` ${req.params.id} id tai category олдсонгүй`, 400);
    }
    res.json({
      messege: ` ${req.params.id} id tai category`,
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const data = await categorySchema.create(req.body);
    res.json({
      messege: ` нэг  category үүслээ`,
      data: data,
    });
  } catch (error) {
    next(error);
  }
};
