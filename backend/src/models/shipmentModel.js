import mongoose from "mongoose";

const shipmentSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now,
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
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: Buyer },
    artisan: [{ type: mongoose.Schema.Types.ObjectId, ref: Artisan }],
  },
  { timestamps: true }
);

export const Shipment = mongoose.model("Shipment", shipmentSchema);
