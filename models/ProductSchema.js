const mongoose=require('mongoose');

 let productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    offerPrice:Number,
    description:String,
    imageURL:String,
    category:String,
    size:String
 });
//create modal 
 module.exports = mongoose.model("product", productSchema);