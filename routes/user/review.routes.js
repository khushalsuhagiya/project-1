const express = require('express');
const { verifyToken } = require('../../helpers/tokenverify');
const { upload } = require('../../helpers/imageuplode');
const reviewRoutes = express.Router();
const { addReivew,
     getAllReview,
     specificReivew,
     updateReview,
     deleteReview } = require('../../controller/user/review.controller');

reviewRoutes.post('/add-review', verifyToken, upload.single('productImage') ,addReivew);
reviewRoutes.get('/getall-review', verifyToken, getAllReview);
reviewRoutes.get('/get-review', verifyToken, specificReivew);
reviewRoutes.put('/update-review', verifyToken, updateReview);
reviewRoutes.delete('/delete-review', verifyToken, deleteReview);

module.exports = reviewRoutes