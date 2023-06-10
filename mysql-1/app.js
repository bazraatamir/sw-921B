const express = require("express");
require('dotenv').config();
const testRouter = require('./routes/test')
const app = express();

app.use('/test',testRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server listen ${process.env.PORT} port`)
})