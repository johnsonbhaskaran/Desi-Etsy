import { Router } from "express";
import {
  buyerLogin,
  buyerRegister,
  artisanLogin,
  artisanRegister,
} from "../controllers/authController.js";

const router = Router();

router.route("/login/buyer").post(buyerLogin);
router.route("/login/artisan").post(artisanLogin);
router.route("/register/buyer").post(buyerRegister);
router.route("/register/artisan").post(artisanRegister);

export default router;
