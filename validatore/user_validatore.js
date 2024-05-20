const User=require('../models/user_model')
exports.checkUser = async (req, res, next) => {
    try {
      const {sUserName,sName,sCity }= req.body
      if (!sUserName||!sName || !sCity) {
          return res.status(404).json({ sMessage: "Please Fill All The Fields!" });
        }
      const userfound= await User.findOne({sUserName:sUserName})
      if(userfound)  return res.status(409).json({ sMessage: "All ready Exist!" });
      return next();
    } catch (error) {
      return res
        .status(500)
        .json({ sMessage: "Internal Server Error", sError: error.message });
    }
  };