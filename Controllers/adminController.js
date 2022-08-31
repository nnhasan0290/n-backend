import { catchAsyncError } from "../middlewars/catchAsyncErrors.js";
import Product from "../Models/productModel.js";
import User from "../Models/userModel.js";
import { v2 as cloudinary } from "cloudinary";

export const adminAllProduct = catchAsyncError(async (req, res, nex) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});

// Delete product admin
export const deleteProduct = catchAsyncError(async (req, res, nex) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw { message: "product not found", statusCode: 400 };
  }
  for (let i = 0; i < product.images.length; i++) {
    cloudinary.uploader.destroy(product.images[i].public_id);
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
});

export const getAllUser = catchAsyncError(async (req, res, nex) => {
  const user = await User.find();
  if (!user) {
    throw { message: "user not found", statusCode: 400 };
  }
  res.status(200).json({
    success: true,
    user,
  });
});
