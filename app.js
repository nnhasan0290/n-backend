import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import cors from "cors";
import productRoutes from "./Routes/productRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import paymentRoutes from "./Routes/paymentRoutes.js";
import adminRoutes from "./Routes/adminRoutes.js";
import multer from "multer";
import errorHandler from "./middlewars/error.js";
import cookieParser from "cookie-parser";
const app = express();
const upload = multer();

app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "./config/.env" });
}
connectDatabase();

app.use(
  cors({
    origin: "https://nxt-shop-jcssuzof3-nnhasan0290.vercel.app",
    credentials: true,
  })
);

app.use(upload.array());

app.use("/api", productRoutes);

app.use("/api", userRoutes);

app.use("/api", paymentRoutes);

app.use("/api", adminRoutes);

app.use(errorHandler);
export default app;
