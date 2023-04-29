const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = Schema({
    test:{
        type:String,
        required:[true,"test iig oruulna uu"]
    }
});

module.exports = mongoose.model('test',testSchema)