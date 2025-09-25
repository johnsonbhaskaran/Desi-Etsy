import express from "express";
import "dotenv/config.js";
import Product from "../models/Product.js";
import { verifyTokenAndAdmin } from "./verifyToken.js";

const productRouter = express.Router();

/* -----------------------------------------------------------------/
                    * CREATE new product *
/------------------------------------------------------------------*/

productRouter.post("/", verifyTokenAndAdmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const productSaved_db = await newProduct.save();
    res.status(200).json(productSaved_db);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                    * UPDATE Product data
                    * - verify with Access Token *
/------------------------------------------------------------------*/

//? Executing thru Middleware VerifyToken
productRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    //? Pulling Product by Id and update data - ONLY ADMIN
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      //? When set new: false . It takes second attempt to update the information.
      { new: true }
    );

    res.status(200).json({ updatedProduct });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                   * DELETE product data *
/------------------------------------------------------------------*/

productRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    //? Find the product from the DB and delete the document - ONLY ADMIN
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("product deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                   * GET product data *
/------------------------------------------------------------------*/

productRouter.get("/:id", async (req, res) => {
  try {
    //? Find the product from the DB using ID and get the info
    const product = await Product.findById(req.params.id);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                   * GET ALL products data *
/------------------------------------------------------------------*/

productRouter.get("/", async (req, res) => {
  //? In case of Query Params - new=true
  const queryNew = req.query.new;
  const queryCategory = req.query.category;

  try {
    //? Find all products from the DB
    const allProducts = await Product.find();

    res.status(200).json(allProducts);
  } catch (err) {
    return res.status(500).json(err);
  }

  //? Show the latest five products from the DB - If queryNew=true
  if (queryNew) {
    try {
      //? pulls everything and sorts the latest 5 products using createdAt
      const latest_5_products = await Product.find().sort({ createdAt: -1 }).limit(5);

      res.status(200).json(latest_5_products);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  //? Show the latest five products from the DB - If queryCategory=String
  if (queryCategory) {
    try {
      //? one way to do fetch specific category product
      // const selectedCategory_products = await Product.find({ categories: req.query.category });

      //? second way to do fetch specific category product
      const selectedCategory_products = await Product.find({
        categories: { $in: [req.query.category] },
      });

      res.status(200).json({ selectedCategory_products });
    } catch (err) {
      return res.status(500).json(err);
    }
  }
});

export default productRouter;
