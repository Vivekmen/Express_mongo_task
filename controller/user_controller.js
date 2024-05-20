const User=require('../models/user_model')
exports.creatuser=async (req,res,next)=>{
    try {
        const {sUserName,sName,sCity}=req.body;

    
        const Usercreat=await User.create({
            sUserName,sName,sCity
        })
    
        return res.status(201).json({
          sMessage: "user Added Successfully",
          oData: Usercreat,
        });
      } catch (error) {
        return res
          .status(500)
          .json({ sMessage: "Internal Server Error", sError: error.message });
      }
}