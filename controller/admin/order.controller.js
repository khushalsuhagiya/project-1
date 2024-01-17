const ordermodel = require('../../model/user/order.model');
const {mongoose} = require('mongoose');

exports.showAllorder=  async (req,res)=> {
    try {
        let order = await ordermodel.find({isDelete: false});
        res.json(order);

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Internal server eroor"}
        )
    }
}

exports.specificorder = async (req,res) => {
    try {
        const {orderId} = req.body;
        let order= await ordermodel.findOne({_id: orderId, isDelete: false});
        if(!order){
            return res.json({message:"This cart Is Not Found!"})
        }
        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}