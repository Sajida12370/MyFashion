// const mongoose = require('mongoose')
// const orderSchema = new mongoose.Schema({

//     orderId:String,
//     products:[
//         {
//             productId:{type:String,required:true},
//             quantity: {type:Number,reqired:true},
//         }
//     ],
//     amount:Number,
//     email:{type:String,required:true},
//     status : {
//         type:String,
//         enum:["pending","processing","shipped","completed"],
//         default:"pending"

//     }

// },{timeStamps:true})

// const Order=mongoose.model('Order',orderSchema)
// module.exports=Order
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId: { type: String, required: true },  // Optional: Consider making this required
    products: [
        {
            productId: { type: String, required: true },
            quantity: { type: Number, required: true }, // Fixed typo
        }
    ],
    amount: { type: Number, required: true },  // Optional: Consider making this required
    email: { type: String, required: true },
    status: {
        type: String,
        enum: ["pending", "processing", "shipped", "completed"],
        default: "pending"
    }
}, { timestamps: true }); // Corrected timestamps option

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
