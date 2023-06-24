const mongoose = require("mongoose");
const ConnectDB = () => {
  const connect = mongoose.connect(process.env.mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return connect;
};

module.exports = ConnectDB;
