const express = require('express');
const dbConnection = require('./db');
const userModel = require('./userSchema');
const app = express();

port = process.env.PORT || 3000
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userModel = require('./models/user');
const userRouter = require('./Routes/userRoutes');
app.use("/api/users",userRouter)

app.get("/users/all", async (req, res) => {
        const users = await userModel.find();
        res.json({ users });
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