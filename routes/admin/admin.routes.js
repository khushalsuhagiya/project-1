const express = require('express');
const adminRoutes = express.Router();
const{
    signup,
    login
 } = require('../../controller/admin/admin.controller');
//  const{upload} = require('../../helpers/imageuplode')

adminRoutes.post('/singup',signup);
adminRoutes.post('/login', login);

module.exports = adminRoutes;