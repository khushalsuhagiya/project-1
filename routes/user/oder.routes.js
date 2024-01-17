const express = require('express');
const {verifyToken} = require('../../helpers/tokenverify');
const orderRoute = express.Router();
const {
    addOrder,
    getOrder,
    deleteOrder,
    updateOrder
} = require('../../controller/user/oder.controller');

orderRoute.post('/add-Order',verifyToken,addOrder);
orderRoute.get('/get-Order',verifyToken,getOrder);
orderRoute.delete('/delete-Order',verifyToken,deleteOrder);
// orderRoute.put('/update-Order',verifyToken,updateOrder);


module.exports = orderRoute