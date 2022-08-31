import express from "express";
import { loadUser, loginUser,logoutUser } from "../Controllers/userController.js";
import { createUser } from "../Controllers/userController.js";
const router = express.Router();

router.route("/user/creating").post(createUser);
router.route("/user/login").post(loginUser);
router.route("/user/logout").get(logoutUser);
router.route("/user/load").get(loadUser);


export default router;