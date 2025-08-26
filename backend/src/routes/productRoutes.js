import { Router } from "express";
import {
  getAllProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = Router();

router.route("/").get(getAllProducts).post(createProduct);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

export default router;
