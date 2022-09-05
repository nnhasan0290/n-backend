import express from "express";
import {
  adminAllProduct,
  deleteProduct,
  getAllUser,
} from "../Controllers/adminController.js";
import isAuthenticated from "../middlewars/auth.js";

const router = express.Router();

router.route("/admin/products").get(adminAllProduct);
router.route("/admin/users").get(getAllUser);
router
  .route("/admin/product/delete/:id")
  .delete(isAuthenticated, deleteProduct);

export default router;
