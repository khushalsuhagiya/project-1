const express = require('express');
const userRoutes = express.Router();
const {verifyToken} = require('../../helpers/tokenverify');
const{
    signup,
    login,
    getuser,
    updateuser,
    changePassword,
    deleteuser
 } = require('../../controller/user/user.controller');
//  const{upload} = require('../../helpers/imageuplode')

userRoutes.post('/singup',signup);
userRoutes.post('/login', login);
userRoutes.get('/profile',verifyToken, getuser);
userRoutes.put('/updateuser',verifyToken,updateuser);
userRoutes.delete('/delete',verifyToken,deleteuser);
userRoutes.put('/update',verifyToken,changePassword);

module.exports = userRoutes;