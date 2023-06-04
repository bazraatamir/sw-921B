// const  = require('../model/userModel')
const { User,getMember} = require('../model/userModel')
exports.getUserData=async (req,res)=>{
    console.log(getMember)
    let data = await getMember()
    res.json({
        success:true,
        data,
    })
}

exports.postData = async (req,res)=>{
    try {
        let id = req.body.id;
        let name = req.body.name;
        let user = new User(id,name);
        user.save(user)
        res.send("success")

    } catch (error) {
        res.json({
            error
        })
    }
}