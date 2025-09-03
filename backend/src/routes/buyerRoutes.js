import { Router } from "express";
import { buyerLogin, buyerRegister, buyerCurrent } from "../controllers/buyerRouteController.js";
import validateToken from "../middlewares/validateTokenHandler.js";

const router = Router();

router.route("/login").post(buyerLogin);
router.route("/register").post(buyerRegister);
router.route("/current").get(validateToken, buyerCurrent);

export default router;
