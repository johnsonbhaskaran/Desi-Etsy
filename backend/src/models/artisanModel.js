import mongoose from "mongoose";

const artisanSchema = new mongoose.Schema(
  {
    artisan: [
      {
        name: {
          type: String,
          required: true,
        },
        image: {
          type: String,
        },
        password: {
          type: String,
          required: true,
          unique: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        phone: {
          type: Number,
          required: true,
        },
        addressType: {
          type: String,
          required: true,
        },
        address: {
          line1: {
            type: String,
            required: true,
          },
          line2: {
            type: String,
          },
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        PIN: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Artisan = mongoose.model("Artisan", artisanSchema);
