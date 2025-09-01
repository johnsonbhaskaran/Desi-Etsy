import asyncHandler from "express-async-handler";
import { Product } from "../models/productModel.js";

//*@desc Get all products
//@route GET /api/products
//@access public
const getAllProducts = asyncHandler(async (req, res) => {
  const allProducts = await Product.find();
  res.status(200).json(allProducts);
});

//*@desc Get single product
//@route GET /api/products/:id
//@access public
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({ message: "Not found" });
  }
  res.status(200).json(product);
});

//*@desc Update single product
//@route PUT /api/products/:id
//@access public
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({ message: "Not found" });
  }

  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedProduct);
});

//*@desc Create new product
//@route POST /api/products
//@access public
const createProduct = asyncHandler(async (req, res) => {
  const {
    name,
    category,
    stockQuantity,
    size,
    price,
    discount,
    images,
    description,
    additionalInfo,
    careInstruction,
    material,
    color,
    technique,
  } = req.body;
  const newProduct = Product.create(req.body);
  (await newProduct).save();

  res.status(201).json(newProduct);
});

//*@desc Delete single product
//@route DELETE /api/products/:id
//@access public
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404).json({ message: "Not found" });
  }

  const removeProduct = await Product.findByIdAndDelete(req.params.id, req.body, { new: true });
  res.status(200).json(removeProduct);
});

export { getAllProducts, getProduct, updateProduct, createProduct, deleteProduct };
