import mongoose from "mongoose";
const {Schema} = mongoose; 

 const Order = mongoose.model("Order",Schema({
   shippingInfo: {
    address:{
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true
    },
    postCode: {
        type: Number,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
   },
   orderItems: [
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true
        },
        quantity:{
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
        },
        product: {
            type: mongoose.Schema.ObjectId,
            ref: "Product",
            required: true
        }
    }
   ],
   totalPrice: {
    type: Number,
    required: true
   },
   user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "User"
   },
   orderStatus: {
    type: String,
    required: true,
    default: "processing"
   }
}))

export default Order;