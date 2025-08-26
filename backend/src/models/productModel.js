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
        careInstruction: {
          type: [String],
          required: true,
        },
        material: {
          type: [String],
          required: true,
        },
        color: {
          type: [String],
          required: true,
          default: ["assorted"],
        },
        technique: {
          type: [String],
          required: true,
        },
        disclaimer: {
          type: [String],
          required: true,
          default: [
            "Please note that all our products are meticulously handmade by master artisans one piece at a time. Due to this process, there may be a variation from one item to the next. Such variations are inherent in the manufacturing of handmade products, so you may expect minor distinctions that will make your purchase special and truly one of a kind.",
          ],
        },
        saleCount: {
          type: Number,
          required: true,
          default: 0,
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

/* -----------------------------------------------------------------/
                    ** sample data
                   {
  "name": "Tesselate Quilt",
  "category": ["textile","textile-surplus", "textile-waste"],
  "stockQuantity": 12,
  "size": ["L", "XL"],
  "price": 47500.00,
  "discount": 30,
  "images": ["backend\src\assets\Tesselate-Quilt.webp"],
  "description": ["Chennai-based artist-designer Kamala Murali’s first solo exhibition, MODERN IMPROV, shines a light on Kamala’s innate gift for colour, where unexpected compositions “just fall into place”. Her independent practise does not just explore the limitless potential of pre-consumer textile surplus and waste, but most importantly, it clears the clutter, and distills it down to the mystical essence of colour."],
  "additionalInfo": ["Patchwork & Long-arm Quilting"],
  "careInstruction": ["Dry Clean Only"],
  "material": ["Mixed Fabrics"],
}
/------------------------------------------------------------------*/
