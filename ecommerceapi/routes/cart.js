import express from "express";
import "dotenv/config.js";
import Cart from "../models/Cart.js";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";

const cartRouter = express.Router();

/* -----------------------------------------------------------------/
                    * CREATE new cart *
/------------------------------------------------------------------*/

cartRouter.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const CartSaved_db = await newCart.save();
    res.status(200).json(CartSaved_db);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                    * UPDATE Cart data
                    * - verify with Access Token *
/------------------------------------------------------------------*/

//? Executing thru Middleware VerifyToken
cartRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    //? Pulling Cart by Id and update data - ONLY ADMIN
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      //? When set new: false . It takes second attempt to update the information.
      { new: true }
    );

    res.status(200).json({ updatedCart });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                   * DELETE Cart data *
/------------------------------------------------------------------*/

cartRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    //? Find the Cart from the DB and delete the document - ONLY ADMIN
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                   * GET User Cart data *
/------------------------------------------------------------------*/

cartRouter.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    //? Find the Cart from the DB using ID and get the info
    const Cart = await Cart.findOne({ userId: req.params.userId });

    res.status(200).json(Cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
* GET ALL Carts data - ONLY ADMIN *
/------------------------------------------------------------------*/

cartRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const allCartDetails = await Cart.find();

    res.status(200).json(allCartDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default cartRouter;
