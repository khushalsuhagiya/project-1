const express = require('express');
const { showAllcart, 
       specificcart 
    } = require('../../controller/admin/cart.controller');
const { verifyToken } = require('../../helpers/tokenverify');
const productRoutes = express.Router();

productRoutes.get('/showall-cart', verifyToken , showAllcart);
productRoutes.get('/show-cart', verifyToken, specificcart);

module.exports = productRoutes