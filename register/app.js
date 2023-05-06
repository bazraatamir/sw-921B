const express = require("express");
const connectDB = require("./data");
const categoryRouter = require("./routes/categotyRoute");
const userRouter = require("./routes/userRouter");
const errorHandle = require('./middleware/error')

const app = express();
connectDB();

app.use(express.json());
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use(errorHandle)

app.listen(3000, () => {
  console.log("server listen 3000 port");
});
