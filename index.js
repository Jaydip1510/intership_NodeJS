const express = require('express');
const dbConnection = require('./db');
const userModel = require('./userSchema');
const app = express();

port = process.env.PORT || 3000
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/users/create",async (req, res) => {
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
})

app.get("/users/all", async (req, res) => {
    try {
        const users = await userModel.find();
        res.json({ users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}); 

app.delete("/users/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json({ message: "User deleted successfully", deletedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put("/api/update/:id", (req, res) => {
     const id = req.params.id;
     res.status(200).json({message:"this is update"+id});
});



app.listen(port,() => console.log('server is running on port'+port));