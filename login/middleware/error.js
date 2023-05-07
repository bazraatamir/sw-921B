const errorHandle = (error,req,res,next)=>{
    res.status(error.statusCode || 500).json({
        success:false,
        err:error.message
    })
}

module.exports = errorHandle