
const mongoose=require('mongoose');

 let userSchema=new mongoose.Schema({
    name:String,
    email:String,
    contact:String,
    password:String
 });
//create modal 
 module.exports = mongoose.model("user", userSchema);