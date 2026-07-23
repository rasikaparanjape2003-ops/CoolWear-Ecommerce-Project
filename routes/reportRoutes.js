
// const express = require("express");
// const router = express.Router();

// const Order = require("../models/Order");
// const Product = require("../models/Product");
// const User = require("../models/User");


// // ✅ SALES REPORT
// router.get("/report/sales", async (req, res) => {
//   try {
//     const orders = await Order.find();

//     const totalOrders = orders.length;

//     const totalRevenue = orders.reduce(
//       (sum, order) => sum + order.totalAmount,
//       0
//     );

//     res.json({
//       totalOrders,
//       totalRevenue
//     });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// // ✅ ORDER STATUS REPORT
// router.get("/report/orders", async (req, res) => {
//   try {
//     const orders = await Order.find();

//     const report = {
//       processing: orders.filter(o => o.status === "Processing").length,
//       shipped: orders.filter(o => o.status === "Shipped").length,
//       delivered: orders.filter(o => o.status === "Delivered").length,
//       cancelled: orders.filter(o => o.status === "Cancelled").length
//     };

//     res.json(report);

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// // ✅ USER REPORT
// router.get("/report/users", async (req, res) => {
//   try {
//     const users = await User.find();

//     res.json({
//       totalUsers: users.length
//     });

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });


// // ✅ PRODUCT REPORT
// router.get("/report/products", async (req, res) => {
//   try {
//     const products = await Product.find();

//     const report = {
//       totalProducts: products.length,
//       men: products.filter(p => p.category === "men").length,
//       women: products.filter(p => p.category === "women").length,
//       kids: products.filter(p => p.category === "kids").length
//     };

//     res.json(report);

//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;