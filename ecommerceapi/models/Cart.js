import { model, Schema } from "mongoose";

const cartSchema = Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        productQuantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

const Cart = model("Cart", cartSchema);

export default Cart;
