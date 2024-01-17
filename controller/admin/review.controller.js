const reviewModel = require('../../model/user/review.model');

exports.getAllReview = async (req,res) => {
    try {
        let isUser = await reviewModel.find({user: req.user._id, isDelete: false});
        res.json(isUser);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

exports.specificReivew = async (req,res) => {
    try {
        const {cartItem} = req.body;
        let isReview = await reviewModel.findOne({user: req.user.id, isDelete: false});
        if(!isReview){
            return res.json({message: "you are not give review"});
        }

        isReview = await reviewModel.find({cartItem: cartItem, isDelete: false});
        if(!isReview){
            return res.status(404).json({message:"This item does not have a review."});
        }
        res.json(isReview);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}