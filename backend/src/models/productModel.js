import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product: [
      {
        name: {
          type: String,
          required: true,
        },
        category: {
          type: [String],
          required: true,
        },
        stockQuantity: {
          type: Number,
          required: true,
          min: 1,
        },
        size: {
          type: [String],
          required: true,
        },
        price: {
          type: Number,
          required: true,
          min: 1,
        },
        discount: {
          type: Number,
        },
        images: {
          type: [String],
          required: true,
        },
        description: {
          type: [String],
          required: true,
        },
        additionalInfo: {
          type: [String],
          required: true,
        },
        material: {
          type: [String],
          required: true,
        },
        saleCount: {
          type: Number,
          required: true,
        },
        popularityRank: {
          type: Number,
          required: true,
          default: 0,
        },
        trendingScore: {
          type: Number,
          required: true,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
