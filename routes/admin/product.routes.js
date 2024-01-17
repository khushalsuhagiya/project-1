const express = require('express');
const productRoute = express.Router();
const {
    createProduct,
    updateProduct,
    getAllProduct,
    specificProduct,
    deleteProduct
} = require('../../controller/admin/product.controller');
const { upload } = require('../../helpers/imageuplode');
const { verifyToken } = require('../../helpers/tokenverify');

productRoute.post('/add-product', verifyToken ,upload.single('productImage'),createProduct);
productRoute.get('/getall-product', verifyToken , getAllProduct);
productRoute.get('/get-product', verifyToken , specificProduct);
productRoute.put('/update-product', verifyToken , upload.single('productImage') , updateProduct);
productRoute.delete('/delete-product', verifyToken , deleteProduct);

module.exports = productRoute