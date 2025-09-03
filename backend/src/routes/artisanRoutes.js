import { Router } from "express";
import validateToken from "../middlewares/validateTokenHandler.js";
import {
  artisanLogin,
  artisanRegister,
  artisanCurrent,
} from "../controllers/artisanRouteController.js";

const router = Router();

router.route("/login").post(artisanLogin);
router.route("/register").post(artisanRegister);
router.route("/current").get(validateToken, artisanCurrent);

export default router;
