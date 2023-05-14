const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = Schema(
    {
        userInfo:{
            type:mongoose.Schema.ObjectId,
            ref:"user",
            required:true
        },
        porductInfo:{
            type:mongoose.Schema.ObjectId,
            ref:"product",
            required:true
        }
    }
)

module.exports = mongoose.model("order", orderSchema);