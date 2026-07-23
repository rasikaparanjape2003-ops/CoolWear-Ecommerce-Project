
const mongoose=require('mongoose');

 let orderSchema=new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  products: [
    {
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  totalAmount: Number,
  paymentId: String,
  orderStatus: {
    type: String,
    enum: ["Paid", "Shipped", "Delivered", "Cancelled"],
    default: "Paid"
  }
}, { timestamps: true });
    
//create modal 
 module.exports = mongoose.model("order", orderSchema);