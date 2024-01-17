const express = require('express');
const productRoutes = express.Router();
const {
    showAllProduct,
    specificProduct
} = require('../../controller/user/product.controller');
const { verifyToken } = require('../../helpers/tokenverify');

productRoutes.get('/showAll-Product', verifyToken , showAllProduct);
productRoutes.get('/specificProduct', verifyToken , specificProduct);

module.exports = productRoutes