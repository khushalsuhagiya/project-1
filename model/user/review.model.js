const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    cartItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    },
    username: {
        type: String
    },
    profileImage: {
        type: String
    },
    productImage: {
        type: String
    },
    productName: {
        type: String,
        require: true
    },
    isDelete: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('reviews', reviewSchema);