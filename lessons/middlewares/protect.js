const asyncHandler = require("./asyncHandler");
const MyError = require("../utils/myError");
const jwt = require("jsonwebtoken");
const userSchema = require("../model/userModel");
exports.protectFun = asyncHandler(async (req, res, next) => {
  const testToken = req.headers.authorization;
  let token;
  if (!testToken) {
    throw new MyError("таний эрх хүрэхгүй байна", 400);
  }
  token = testToken.split(" ")[1];
  const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userSchema.findById(verifyToken.id);
  req.user = user;
  next();
});
