const express = require('express');
const { verifyToken } = require('../../helpers/tokenverify');
const { getAllReview, specificReivew } = require('../../controller/admin/review.controller');
const reviewRoutes = express.Router();

reviewRoutes.get('/showall-review', verifyToken, getAllReview);
reviewRoutes.get('/show-review', verifyToken, specificReivew);

module.exports = reviewRoutes