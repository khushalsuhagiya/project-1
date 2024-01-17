const User = require("../../model/user/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../model/user/user.model");



exports.signup = async (req, res) => {
  try {
    let { name, email, password,  confirmPassword,isAdmin} = req.body;
    let user = await userModel.findOne({ email: email, isDelete: false });

    if (user) {
      return res.json({ messge: "admin is alredy exist..." });
    }
    if(password !== confirmPassword){
      return res.json({message: "password do not match."});
    }
    
    // let userpath;
    // if(req.file)
    // {
    //   userpath = `${req.file.path}`
    // }

    let hashPassword = await bcrypt.hash(password, 10);
    user = await User.create({
      name, email, 
      password: hashPassword,
      confirmPassword: hashPassword,
      isAdmin
    });

    user.save();
    res.status(201).json({ message: "admin is Added.", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};



exports.login = async (req, res) => {
    try {
      const { email, password} = req.body;
      let user = await User.findOne({ email: email, isDelete: false });
      if (!user) {
        return res.json({ messge: "user is not found..." });
      }
      let checkPassword = await bcrypt.compare(password, user.password);
      if(!checkPassword){
        return res.json({message: "password is not matched"});
      }
      let payload={
        userId: user._id
      }
      let token =jwt.sign(payload, process.env.SECRET_KEY);
      res.status(200).json({token , message: 'Login sucess'});
  
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "internal server Error"});
    }
  };
  