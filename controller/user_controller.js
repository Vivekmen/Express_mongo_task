const User=require('../models/user_model')
exports.creatuser=async (req,res,next)=>{
    try {
        const {sUserName,sName,sCity,eStatus}=req.body;
      
        // for(let i=1;i<=10;i++){
        //   let userName=sUserName+i+i
        //   let name=sName+i+i
          const Usercreat=await User.create({
              sUserName,sName,sCity,eStatus
          })
      
        // }
        return res.status(201).json({
          sMessage: "user Added Successfully",
          oData:Usercreat
        });
      } catch (error) {
        return res
          .status(500)
          .json({ sMessage: "Internal Server Error", sError: error.message });
      }
}