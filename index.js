const express = require('express');
const dbConnection = require('./db');
const userRouter = require('./Routes/userRoutes');
const app = express();

port = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userModel = require('./models/user');

app.use("/api/users",userRouter)

// app.delete("/users/delete/:id", async (req, res) => {
//     try {
//         const id = req.params.id;
//         const deletedUser = await userModel.findByIdAndDelete(id);

//         if (!deletedUser) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.json({ message: "User deleted successfully", deletedUser });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

dbConnection();
app.listen(port,() => console.log('server is running on port'+port));