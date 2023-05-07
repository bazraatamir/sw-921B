const logger = (req, res, next) => {
  console.log(req.cookies);
  next();
};
module.exports = logger;
