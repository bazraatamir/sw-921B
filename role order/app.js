const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const categoryRouter = require("./route/category");
const userRouter = require("./route/user");
const productRouter = require("./route/product");
const connectDB = require("./data");
const errorHandle = require("./middleware/error");
const orderRouter = require("./route/order");
dotenv.config();
const app = express();

connectDB();
//body parser
app.use(express.json());
app.use(cookieParser());
app.use("/category", categoryRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/order", orderRouter);

app.use(errorHandle);

app.listen(process.env.PORT, () => {
  console.log(`server listen  port ${process.env.PORT}`);
});
//mvc
