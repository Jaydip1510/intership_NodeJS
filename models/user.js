const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    email:{
         type:String,
         required: true,
    },
    password:{
        type:String,
        required: true,
    },
    isVerfied:{
        type:Boolean,
        default:false,
    }
})

const userModel = new mongoose.model('userinfo',userSchema);
module.exports = userModel;