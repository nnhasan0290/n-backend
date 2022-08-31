import express from "express";
import { createOrder, getAllOrder, paymentProcess,getMyOrder } from "../Controllers/paymentController.js";
import isAuthenticated from "../middlewars/auth.js";
const router = express.Router();


router.route("/payment/process").post(paymentProcess);
router.route("/order/create").post(isAuthenticated,createOrder);
router.route("/order/get").get(getAllOrder)
router.route("/order/myorder").get(isAuthenticated,getMyOrder)

export default router;