const express = require('express');
const dbConnection = require('./db');
const userRouter = require('./Routes/userRoutes');
const app = express();

port = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userModel = require('./models/user');

app.use("/api/users",userRouter)

dbConnection();
app.listen(port,() => console.log('server is running on port'+port));