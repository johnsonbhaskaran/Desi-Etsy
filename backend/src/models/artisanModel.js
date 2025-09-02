import mongoose from "mongoose";

const artisanSchema = new mongoose.Schema(
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
        type: [Number],
        required: true,
        validate: {
          validator: function (v) {
            return v.every((p) => /^[0-9]{6}$/.test(p.toString()));
          },
        },
      },
    },
    location: {
      zone: Number, // * Pincode
      latitude: Number,
      longitude: Number,
      DIGIPIN: String,
      plusCodes: String,
      what3words: String,
    },
  },
  { timestamps: true }
);

export const Artisan = mongoose.model("Artisan", artisanSchema);
