const mongoose=require('mongoose');
const config = require("./config");

module.exports=function Databaseconnect(){mongoose.connect(config.DATABASE_URL)
         .then(()=>console.log("Data base Connected"))
         .catch((err)=>console.log("Mongo error",err));
}