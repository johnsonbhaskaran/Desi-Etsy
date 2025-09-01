import { Router } from "express";
import { buyerLogin, buyerRegister, buyerCurrent } from "../controllers/buyerRouteController.js";

const router = Router();

router.route("/login").post(buyerLogin);
router.route("/register").post(buyerRegister);
router.route("/current").post(buyerCurrent);

export default router;
