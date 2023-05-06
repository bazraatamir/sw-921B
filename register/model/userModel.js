const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const userSchema = Schema({
  userName: {
    type: String,
    required: [true, "хэрэглэгчийн нэрийг олруулна уу"],
  },
  firstName: {
    type: String,
    required: [true, "овогоо оруулна уу"],
  },
  email: {
    type: String,
    required: [true, "email оруулна уу"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "э-майл буруу байна",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "нууц үгээ оруулна уу"],
  },
});
userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("user", userSchema);
