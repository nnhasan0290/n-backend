import stripe from "../utils/stripe.js";
import {catchAsyncError} from "../middlewars/catchAsyncErrors.js"
import Order from "../Models/orderModel.js"

export const paymentProcess = catchAsyncError(async(req,res,nex)=>{
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "usd",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      res.status(200).json({
        success: true,
        clientSecret: paymentIntent.client_secret
      })
})

export const createOrder = catchAsyncError(async (req,res,nex) => {
  req.body.user = req.user._id;
 const order = await Order.create(req.body);
  res.status(200).json({
    success: true,
    order
  });
})


export const getAllOrder = catchAsyncError(async (req,res,nex) => {
 const order = await Order.find();
  res.status(200).json({
    success: true,
    order
  });
})

export const getMyOrder = catchAsyncError(async (req,res,nex) => {
  const orders = await Order.find({user: req.user._id});
  res.status(200).json({
    success: true,
    orders
  })
})