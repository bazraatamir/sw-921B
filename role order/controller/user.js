const userSchema =require('../model/user');
const MyError = require('../utils/myError');

exports.getUser = async (req,res,next)=>{
    try {
        const data = await userSchema.find()
        res.status(200).json({
            success:true,
            data:data
        })
    } catch (error) {
        res.status(200).json({
            success:true,
            data:error
        })
    }
   
}
exports.login= async(req,res,next)=>{
    try {
        const{email,password} = req.body;
        if(!email || !password){
            throw new MyError("email password oruulna uu",400);
        }
        const user = await  userSchema.findOne({email:email}).select('+password');
        if(!user){
            throw new MyError("email password shalgan uu!",400);
        }
        const enteredUser = await user.checkPassword(password)
        if(!enteredUser){
            throw new MyError("email password shalgan uu!",400);
        }
        let token = await user.JWT()
        let cookieOptoins = {
            expires:new Date(Date.now()+2*24*60*60*1000)
        }
        res.status(200).cookie("token",token,cookieOptoins).json({
            success:true,
            data:user,
            token
        }) 
    } catch (error) {
       next(error)
    }
   
}
exports.postData=async (req,res,next)=>{
    try {
        const data = await userSchema.create(req.body)
        res.status(200).json({
            success:true,
            data:data
        }) 
    } catch (error) {
        res.status(400).json({
            success:false,
            data:error
        }) 
    }
   
}
exports.deleteData=async (req,res,next)=>{
    try {
        const data = await userSchema.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            data:data
        }) 
    } catch (error) {
        res.status(400).json({
            success:true,
            data:error
        }) 
    }
   
}