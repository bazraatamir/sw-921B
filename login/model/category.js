const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = Schema({
    category:{
        type:String,
        required:[true,"category iig oruulna uu"]
    }
});

module.exports = mongoose.model('category',categorySchema)