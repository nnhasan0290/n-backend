import jwt from "jsonwebtoken";
import User from "../Models/userModel.js";
import {catchAsyncError} from "./catchAsyncErrors.js";
const isAuthenticated = catchAsyncError(async(req,res,nex) => {

  const {token} = req.cookies;
    console.log(token);
  const decoded_data = jwt.verify(token,"sssecret");
  const user = await User.findById(decoded_data.id);
  req.user = user;
  nex();
})

export default isAuthenticated;