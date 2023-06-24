const user = require("../model/userModel");
const MyError = require("../utils/myError");
const asyncHandler = require("../middlewares/asyncHandler");
const { generateToken } = require("../utils/token");

exports.register = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const findUser = await user.findOne({ email: email });
  if (findUser) {
    throw MyError(`Бүртгэлтэй мэйл байна `, 400);
  }
  const Userdata = await user.create(req.body);

  res.status(200).json({
    success: true,
    Userdata,
  });
});
exports.Login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const findUser = await user.findOne({ email: email }).select("password");
  if (!findUser) {
    throw new MyError(`Бүртгэлтэй хэрэглэгч алга `, 400);
  }
  const userCheck = await findUser.CheckPassword(password);
  if (!userCheck) {
    throw new MyError(`хэрэглэгчийн мэйл эсвэл нууц үг буруу байна`, 400);
  }

  const token = generateToken(findUser._id);
  res.status(200).json({
    success: true,
    token,
  });
});

exports.test = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  res.send("success");
});
