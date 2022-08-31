import mongoose from "mongoose";
const { Schema } = mongoose;
import validator from "validator";

const User = mongoose.model(
  "User",
  Schema({
    fname: {
      type: String,
      required: [true, "Please enter the frist name"],
      maxLength: [30, "name cannot exceed 30 characters"],
      minLength: [4, "name should be at least 4 characters"],
    },
    lname: {
      type: String,
      required: [true, "Please enter the last name"],
      maxLength: [30, "lname cannot exceed 30 charcater"],
      minLength: [4, "lname should be at least 4 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter the email"],
      unique: true,
      validate: [validator.isEmail, "please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
      minLength: [8, "password should be at least 8 characters"],
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);

export default User;
