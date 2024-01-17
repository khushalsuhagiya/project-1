const jwt = require('jsonwebtoken');
const User = require('../model/user/user.model');

exports.verifyToken = async (req, res, next) => {
    let token = req.headers["authorization"].split(" ")[1];
    let { userId } = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await User.findById(userId);
    if (req.user) {
        next();
    } else {
        res.json({ message: 'user invalid' });
    }
};