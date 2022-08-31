import { catchAsyncError } from "../middlewars/catchAsyncErrors.js";
import { v2 as cloudinary } from "cloudinary";
import User from "../Models/userModel.js";
import jwt from "jsonwebtoken";

export const createUser = catchAsyncError(async (req, res, nex) => {
  if(req.body.password !== req.body.confirmPass){
    throw {message: "password is not matched", statusCode: 400};
  }
  if(!req.body.image){
    throw {message: "image should be given", statusCode: 400};
  }
  const upload_img = await cloudinary.uploader.upload(req.body.image, {
    folder: "Users",
  });
  const avatar = {
    public_id: upload_img.public_id,
    url: upload_img.secure_url,
  };
  req.body.image = avatar;
  const user = await User.create(req.body);
  res.status(200).json({
    success: true,
    user,
  });
});

// Login user
export const loginUser = catchAsyncError(async (req, res, nex) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw { message: "user not found", statusCode: 400 };
  }
  if (password !== user.password) {
    throw { message: "wrong user or password", statusCode: 400 };
  }
  const token = jwt.sign({ id: user._id }, "sssecret");

  res.status(200).cookie("token", token).json({
    success: true,
    user,
    token,
  });
});

export const logoutUser = catchAsyncError((req,res,nex) => {
  console.log(req);
  res.status(200).cookie("token",null).json({
    success: true,
    message: "logged out successfully"
  })
})

//Load user controller
export const loadUser = catchAsyncError(async (req, res, nex) => {
 
  const {token} = req.cookies;
  if(!token){
    throw {message:"user token not found", statusCode:400};
  }
  const decoded_data = jwt.verify(token, "sssecret");
  const user = await User.findById(decoded_data.id);
  if(!user){
    throw{message: "user not found", statusCode:400};
  }
  res.status(200).json({
    success: true,
    user
  });
});


