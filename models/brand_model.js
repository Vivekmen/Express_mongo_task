const mongoose=require('mongoose');

const carbrandSchema=new mongoose.Schema({
    sName:{
        type:String,
        required:true,
    }

},{timestamps:true})

const brand=mongoose.model("Brand",carbrandSchema);
module.exports=brand;