const mongoose = require('mongoose')

//first step 
const userSchema = new mongoose.Schema({
   name :{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   phone:{
    type:Number,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   cpassword:{
    type:String,
    required:true
   }
})

//models (new collection)
const User = mongoose.model('USER',userSchema);
//for req post
module.exports = User;