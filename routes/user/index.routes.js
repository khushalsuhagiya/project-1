const express = require('express');
const Router = express.Router();
const userRoutes = require("../../routes/user/user.routes")
const productRoutes = require("../../routes/user/product.routes")
const cartRoutes = require("../../routes/user/cart.routes")
const orderRoutes = require("../../routes/user/oder.routes")
const favouriteRoutes = require("../../routes/user/favourite.routes")
const reviewRoutes = require("../../routes/user/review.routes")

Router.use("/users",userRoutes)
Router.use("/product",productRoutes)
Router.use("/cart",cartRoutes)
Router.use("/order", orderRoutes)
Router.use("/favourite", favouriteRoutes)
Router.use("/review",reviewRoutes)

module.exports = Router