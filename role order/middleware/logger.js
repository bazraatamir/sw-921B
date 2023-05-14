const MyError = require("../utils/myError");
const jwt = require("jsonwebtoken");
const logger = (req, res, next) => {
  let token = null;
  if (!req.cookies["token"]) {
    return res.status(200).json({
      success: false,
      error: "ta nevternuu",
    });
  }
  token = req.cookies["token"];
  let user = jwt.verify(token, process.env.JWT_SECRET);
  req.userID = user.id;
  next();
};

module.exports = logger;
