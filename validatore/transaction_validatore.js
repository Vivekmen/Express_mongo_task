const Car = require("../models/car_model");
const Seller = require("../models/seller_model");
const User = require("../models/user_model");

exports.checkTransaction=async (req,res,next)=>{

    try {
        const {iCustomerId,iCarsId,iSellerId}=req.body;
        if (!iCustomerId||!iCarsId||!iSellerId) {
          return res.status(404).json({ sMessage: "Please Fill All The Fields!" });
        }
        const carfound = await Car.findOne({_id:iCarsId});
        const sellerfound=await Seller.findOne({_id:iSellerId});
        const customerfound=await User.findOne({_id:iCustomerId});
        if(!customerfound) return res.status(409).json({ sMessage: "User Not Found!Please first creat user" });
        if(!carfound) return res.status(409).json({ sMessage: "Car is Not Available" });
        if(!sellerfound) return res.status(409).json({ sMessage: "seller not Available!" });
        if(customerfound.sCity!==sellerfound.sCity) return res.status(409).json({ sMessage: "seller and buyer city not same!" });
    
        return next();
      } catch (error) {
        return res
          .status(500)
          .json({ sMessage: "Internal Server Error", sError: error.message });
      } 
}