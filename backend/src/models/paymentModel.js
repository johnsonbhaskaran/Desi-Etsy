import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    fromBuyer: [
      {
        date: {
          type: Date,
          required: true,
          default: Date.now,
        },
        type: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        status: {
          type: String,
          required: true,
        },
        transactionID: {
          type: Number,
          required: true,
        },
      },
    ],
    toSeller: [
      {
        date: {
          type: Date,
          required: true,
          default: Date.now,
        },
        type: {
          type: String,
          required: true,
          min: 1,
        },
        amount: {
          type: Number,
          required: true,
        },
        transactionID: {
          type: Number,
          required: true,
        },
        status: {
          type: String,
          required: true,
        },
      },
    ],
    buyer: { type: mongoose.Schema.Types.ObjectId, ref: Buyer },
    artisan: [{ type: mongoose.Schema.Types.ObjectId, ref: Artisan }],
  },
  { timestamps: true }
);

export const Payment = mongoose.model("Payment", paymentSchema);
