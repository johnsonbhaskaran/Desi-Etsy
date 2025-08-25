import { Router } from "express";
import { userLogin, userRegister } from "../controllers/authController";

const router = Router();

router.route("/user/login").post(userLogin);
router.route("/artisan/login").post(userRegister);

export default router;
