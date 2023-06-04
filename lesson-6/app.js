const express = require('express');
const userRouter = require('./routes/user')
const app = express();


app.use(express.json());
app.use('/user',userRouter);


app.listen(3000,()=>{
    console.log(`hello server listen 3000 port`)
})