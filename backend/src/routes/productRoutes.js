import { Router } from "express";

const router = Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Get all products" });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create new product" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get product details for Product ID: ${req.params.id}` });
});
router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update product details for Product ID: ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete product details for Product ID: ${req.params.id}` });
});

export default router;
