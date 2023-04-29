const mongoose = require('mongoose');

const connectDB  = ()=>{
    let connet = mongoose.connect('mongodb+srv://bazarragchaa:bazraa12@cluster0.gdwdrpv.mongodb.net/sw923');
    return connet
}
module.exports = connectDB