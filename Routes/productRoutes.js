import express from "express";
import { createNewReview, createProduct, getSingleProduct } from "../Controllers/productController.js";
import {getAllProducts} from "../Controllers/productController.js";
import isAuthencicated from "../middlewars/auth.js";
const router = express.Router();

router.route("/product/create").post(isAuthencicated,createProduct);
router.route("/products").get(getAllProducts);
router.route("/product/newreview").put(createNewReview);
router.route("/product/singleproduct").get(getSingleProduct);

export default router;
