const testModel = require('../model/test');

exports.getTestData = async(req,res)=>{
        try {
            let data = await testModel.getTets();
            res.status(200).json({
                success:true,
                data
            })
        } catch (error) {
            res.status(400).json({
                success:false,
                error
            })
        }
}