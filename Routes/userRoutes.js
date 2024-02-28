const express = require('express');
const usermodel = require('../models/user');

const {registerUser,getAllData,deleteAllData,updateUserData} = require("../controllers/usercontroller");

const router = express.Router();

router.post('/register', registerUser);
router.get('/alldata', getAllData);
router.delete('/deletedata/:id', deleteAllData);
router.put('/update/:id', updateUserData); 

module.exports = router;

