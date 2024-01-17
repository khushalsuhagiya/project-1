const express = require('express');
const favouriteRoute = express.Router();
const {verifyToken} = require('../../helpers/tokenverify');
const {
    addToFavorite,
    getallFavourite,
    deleteFavourite
} = require('../../controller/user/favourite.controller')

favouriteRoute.post('/addToFavorite', verifyToken, addToFavorite);
favouriteRoute.get('/allfavourite', verifyToken, getallFavourite);
favouriteRoute.delete('/delete-favourite', verifyToken, deleteFavourite);

module.exports = favouriteRoute