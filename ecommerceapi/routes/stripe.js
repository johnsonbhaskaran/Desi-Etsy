import { Router } from "express";
import "dotenv/config.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_KEY);

const stripeRouter = Router();

stripeRouter.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "inr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

export default stripeRouter;
