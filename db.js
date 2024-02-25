const mongoose = require('mongoose');

const dbConnection = async () =>{
   try{
    const url = "mongodb://127.0.0.1:27017/intershipdata";
    await mongoose.connect(url);
   }catch{
       console.log(error);
   }
};

module.exports = dbConnection;