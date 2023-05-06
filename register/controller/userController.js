const userSchema = require("../model/userModel");
const MyError = require('../utils/myError')
exports.getUser = async (req, res, next) => {
  try {
    let data = await userSchema.find();
    res.json({
      data: data,
    });
  } catch (error) {
    res.json({
      messege: ` алдаа гарлаа`,
      err: error,
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const data = await userSchema.create(req.body);
    res.json({
      messege: ` нэг  user үүслээ`,
      data: data,
    });
  } catch (error) {
    next(err)
  }
};
