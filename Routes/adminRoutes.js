import express from "express";
import {
  adminAllProduct,
  deleteProduct,
  getAllUser,
} from "../Controllers/adminController.js";

const router = express.Router();

router.route("/admin/products").get(adminAllProduct);
router.route("/admin/users").get(getAllUser);
router.route("/admin/product/delete/:id").get(deleteProduct);

export default router;
