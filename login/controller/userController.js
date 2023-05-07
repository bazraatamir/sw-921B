const userSchema = require("../model/userModel");
const MyError = require("../utils/myError");

exports.createUser = async (req, res, next) => {
  try {
    const data = await userSchema.create(req.body);
    res.json({
      messege: ` нэг  user үүслээ`,
      data: data,
    });
  } catch (error) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new MyError("email password -oo oruulna", 400);
    }
    let user = await userSchema.findOne({ email: email });

    if (!user) {
      throw new MyError("email password buruu bna", 400);
    }

    let enteredUser = user.checkPassword(password);
    console.log(enteredUser);
    if (!enteredUser) {
      throw new MyError("email password buruu bna", 400);
    }
    let token = user.Getjwt();
    let cookieOption = {
      exprisIn: new Date(Date.now() * 2 * 24 * 60 * 60 * 1000),
    };
    res.status(200).cookie("token", token, cookieOption).json({
      messege: ` нэг  user үүслээ`,
      user,
      token,
    });
  } catch (error) {
    next(err);
  }
};
