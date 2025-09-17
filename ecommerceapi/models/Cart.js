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

export default Cart = model("Cart", cartSchema);
