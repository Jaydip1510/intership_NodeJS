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

exports.getAllData = async (req, res) => {
    const users = await userModel.find();
    res.json({ users });
};

exports.deleteAllData = async (req, res) => {
    const id = req.params.id;
    const deletedUser = await userModel.findByIdAndDelete(id);
    res.json({ deletedUser });
};

exports.updateUserData = (req, res) => {
    const id = req.params.id;
    userModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedUser => {
            res.json({ message: "User updated successfully", user: updatedUser });
        })
        .catch(error => {
            console.error("Error updating user:", error);
            res.status(500).json({ message: "Internal Server Error" });
        });
};