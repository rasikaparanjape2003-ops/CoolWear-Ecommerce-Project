
const express = require('express');

const Course = require('../models/OrderSchema');

const router = express.Router();

router.get("/", async (req, res) => {
  let allOrder = await Order.find()


  res.json({ status: "success", data: allOrder })
});

router.get("/:id", async (req, res) => {
  const orderId = req.params.id;

  const singleOrder = await Order.findById(orderId);

  res.json({ status: "success", data: singleOrder })
});

router.get("/order/:userId", async (req, res) => {

  const orders = await Order.find({
    userId: req.params.userId
  }).sort({ createdAt: -1 });

  res.json({ data: orders });
});


router.post("/", async (req, res) => {
  const newOrder = new Order(req.body);
  await newOrder.save();

  res.json({ status: "success", data: newOrder });
});

router.put("/:id", async (req, res) => {
 try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
});
// router.put("/order/cancel/:id", async (req, res) => {

//   await Order.findByIdAndUpdate(req.params.id, {
//     orderStatus: "Cancelled"
//   });

//   res.json({ message: "Order Cancelled" });
// });

// router.delete("/:id", async (req, res) => {
//   const orderId = req.params.id;

//   const deletedOrder = await Order.findByIdAndDelete(orderId, { new: true })

//   res.json({ status: "success", data: deletedOrder });
// });

router.put("/cancel/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: "Cancelled" },
      { new: true }
    );

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Failed to cancel order" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ error: "Delete failed" });
  }
});
module.exports = router;