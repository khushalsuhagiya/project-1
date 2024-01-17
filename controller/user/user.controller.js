const User = require("../../model/user/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../../model/user/user.model");



exports.signup = async (req, res) => {
  try {
    let { name, email, password,  confirmPassword} = req.body;
    let user = await userModel.findOne({ email: email, isDelete: false });

    if (user) {
      return res.json({ messge: "user is alredy exist..." });
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
    });

    user.save();
    res.status(201).json({ message: "User is Added.", user });
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


exports.getuser = async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};


exports.updateuser = async (req, res) => {
  try {
    let user = await User.findByIdAndUpdate(req.user._id,{$set: {...req.body} },{ new: true });
    res.status(200).json({user, message :'User is updated'});
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};



exports.changePassword = async (req,res) => {
  try {
      let {password, newPassword, confirmPassword} = req.body;
      let checkPassword = await bcrypt.compare(password, req.user.password);
      if (!checkPassword) {
          return res.json({message: 'Incorrect current password'})
      }
      if (newPassword !== confirmPassword) {
          return res.json({message:'New password and Confirm password do not match.'})
      }
      let hashedPassword = await bcrypt.hash(confirmPassword, 10);
      let user = await  User.findByIdAndUpdate(
          { _id : req.user._id},
          {$set:
              {
                  password: hashedPassword,
                  confirmPassword: hashedPassword
              }
          },
          {new: true}
      )
      user.save();
      res.json({message: "password update successfullt"})
  } catch (err) {
      console.log(err);
      res.status(500).json({message: "Internal server error"});
  }
}


 exports.deleteuser = async (req, res) => {
  try {

   let user = await User.findByIdAndUpdate(req.user._id,
    {

    $set: {isDelete: true}
    
    }); 
    res.json({ Message: "User is delete....", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Message: "Internal Server errrer...." });
  }
};