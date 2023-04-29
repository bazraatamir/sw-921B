const express = require('express');
const connectDB = require('./data');

const testSchema = require('./model/test')

const app = express();
connectDB()

app.use(express.json())
app.get('/category',async (req,res)=>{
    try {
        let data = await testSchema.find();
        res.json({
            data:data
        })
    } catch (error) {
        res.json({
            messege:` алдаа гарлаа`,
            err:error
        })
    }
    
})
app.get('/category/:id',async (req,res)=>{
    try {
        let data = await testSchema.findById(req.params.id)
        if(!data){
            return res.json({
                messege:` ${req.params.id} id tai category олдсонгүй`,
                err:error
            })
        }
        res.json({
            messege:` ${req.params.id} id tai category`,
            data:data
        })
    } catch (error) {
        res.json({
            messege:` ${req.params.id} id буруу байна`,
            err:error
        })
    }
   
})
app.post('/category',async(req,res)=>{

    try{
        const data = await testSchema.create(req.body)
        res.json({
        messege:` нэг  category үүслээ`,
        data:data
    })
    }catch(error){
        res.json({
            messege:` алдаа гарлаа`,
            err:error
        })
    }
   
})
app.get('/product',(req,res)=>{
    res.json({
        data:"products"
    })
})

app.listen(3000,()=>{
    console.log("server listen 3000 port")
})