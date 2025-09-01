import { Router } from "express";
import {
  artisanLogin,
  artisanRegister,
  artisanCurrent,
} from "../controllers/artisanRouteController.js";

const router = Router();

router.route("/login").post(artisanLogin);
router.route("/register").post(artisanRegister);
router.route("/current").get(artisanCurrent);

export default router;
