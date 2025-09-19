import { model, Schema } from "mongoose";

const orderSchema = Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        productQuantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);

export default Order;
