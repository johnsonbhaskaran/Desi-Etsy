import mongoose from "mongoose";

const buyerSchema = new mongoose.Schema(
  {
    buyer: [
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
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        phone: {
          type: Number,
          required: true,
          unique: true,
        },
        address: {
          shipping: {
            line1: {
              type: String,
              required: true,
            },
            line2: {
              type: String,
            },
            city: String,
            state: String,
            pincode: {
              type: Number,
              required: true,
              validate: {
                validator: function (v) {
                  return v.every((p) => /^[0-9]{6}$/.test(p.toString()));
                },
              },
            },
            required: true,
          },
          billing: {
            line1: {
              type: String,
              required: true,
            },
            line2: {
              type: String,
            },
            city: String,
            state: String,
            pincode: Number,
          },
        },
        location: {
          zone: { type: Number, required: true }, // * Pincode
          latitude: { type: Number, required: true },
          longitude: { type: Number, required: true },
          DIGIPIN: String,
          plusCodes: String,
          what3words: String,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Buyer = mongoose.model("Buyer", buyerSchema);
