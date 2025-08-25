import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    item: [
      {
        orderID: {
          type: String,
          dafault: () => {
            `${Date.now()}`;
          },
        },
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Cart = mongoose.model("Cart", cartSchema);
