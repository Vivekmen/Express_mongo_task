const Brand=require('../models/brand_model')
exports.checkBrand = async (req, res, next) => {
  try {
    const sName = req.body.sName;
    const carBrand = await Brand.findOne({sName:sName})
    if(carBrand){
      
      return res.status(409).json({ sMessage: "All ready Exist!" });
    }
    if (!sName) {
      return res.status(404).json({ sMessage: "Please Fill All The Fields!" });
    }

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
