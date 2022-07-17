const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    roleId:{
          type:String,
          default:null
    },
    password:{
        type:String,
        required:true
    },
    refreshToken:String
});



module.exports = mongoose.model('User',userSchema);


