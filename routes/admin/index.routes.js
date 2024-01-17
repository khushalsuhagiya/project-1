const express = require('express');
const Router = express.Router();
const adminRoutes = require("./admin.routes");
const productRoutes = require("./product.routes");
const cartRoutes = require("./cart.routes");
const orderRoutes = require("./order.routes");
const reviewRoutes = require("./review.routes");


Router.use("/admin",adminRoutes)
Router.use("/product",productRoutes)
Router.use("/cart",cartRoutes)
Router.use("/order",orderRoutes)
Router.use("/review",reviewRoutes)

module.exports = Router