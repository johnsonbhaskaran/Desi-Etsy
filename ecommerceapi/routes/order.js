import express from "express";
import "dotenv/config.js";
import Order from "../models/Order.js";
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken.js";

const orderRouter = express.Router();

/* -----------------------------------------------------------------/
                    * CREATE new Order *
/------------------------------------------------------------------*/

orderRouter.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const OrderSaved_db = await newOrder.save();
    res.status(200).json(OrderSaved_db);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                    * UPDATE Order data
                    * - verify with Access Token *
/------------------------------------------------------------------*/

//? Executing thru Middleware VerifyToken
orderRouter.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    //? Pulling Order by Id and update data - ONLY ADMIN
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      //? When set new: false . It takes second attempt to update the information.
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                   * DELETE Order data *
/------------------------------------------------------------------*/

orderRouter.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    //? Find the Order from the DB and delete the document - ONLY ADMIN
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
* GET stats - MONTHLY income *
/------------------------------------------------------------------*/

orderRouter.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const todaysDate = new Date();
  const currentMonth = new Date(todaysDate.setMonth(todaysDate.getMonth()));
  const lastMonth = new Date(todaysDate.setMonth(todaysDate.getMonth() - 1));
  const previous_to_last_Month = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    console.log({ lastMonth, currentMonth, previous_to_last_Month });

    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previous_to_last_Month },
        },
      },
      {
        $project: {
          month: {
            $month: "$createdAt",
          },
          //? Only addition when compared to the user stats is
          //? we are adding the sales amount value
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: {
            $sum: "$sales",
          },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
                   * GET User Order data *
/------------------------------------------------------------------*/

orderRouter.get("/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    //? Find the Order from the DB using ID and get the info
    const orders = await Order.find({ userId: req.params.userId });

    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* -----------------------------------------------------------------/
* GET ALL Orders data - ONLY ADMIN *
/------------------------------------------------------------------*/

orderRouter.get("/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const allOrderDetails = await Order.find();

    res.status(200).json(allOrderDetails);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default orderRouter;
