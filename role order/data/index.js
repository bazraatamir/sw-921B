const mongoose = require("mongoose");

let connectDB = () => {
  let connect = mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
