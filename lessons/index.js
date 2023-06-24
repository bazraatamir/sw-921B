const express = require("express");
const dotenv = require("dotenv");
const body_parser = require("body-parser");
const categoriesRouter = require("./routes/category");
const sizeRouter = require("./routes/size");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const WishlistRouter = require("./routes/wishlist");
const errorHandler = require("./middlewares/error");
const ConnectDB = require("./data");
const Wishlist = require("./model/wishList");
dotenv.config();
ConnectDB();
const app = express();
app.use(express.json());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use("/api/user", userRouter);
app.use("/api/category", categoriesRouter);
app.use("/api/size", sizeRouter);
app.use("/api/product", productRouter);
app.use("/api/wishlist", WishlistRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`server listen ${process.env.PORT} listen`);
});
