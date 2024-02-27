const userModel = require('../models/user');

exports.registerUser = async (req,res) => {
    try{
        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        console.log(newUser);
        await newUser.save();
        res.json({message:"User created successfully",user: newUser});
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal Server Error"});
    }
}