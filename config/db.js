const mongoose = require('mongoose');


const ConnectDb= async()=>{
    try{
        await mongoose.connect(process.env.MongoURL);
        console.log("mongo connected successfully");
    }
    catch(err){
        await console.error("Mongo connection error",err.message);
        process.exit(1)
    }
}


module.exports= ConnectDb;