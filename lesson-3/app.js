const express = require('express');
const todoRouter = require('./routes/todo')
const app = express();

app.use(express.json())
app.use('/todo',todoRouter);


app.listen(3000,()=>{
    console.log(`server listen 3000`)
})
//mvc modal view controller