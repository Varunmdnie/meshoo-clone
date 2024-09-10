let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
  
    phoneNumber:{
        type:Number,
        required:true
    }

})

let User = mongoose.model('User',userSchema)
module.exports = User