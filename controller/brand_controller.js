const Brand = require("../models/brand_model");

exports.creatBrand = async (req, res) => {
  try {
    const {sName} = req.body;

    const brand = await Brand.create({ sName });

    return res.status(201).json({
      sMessage: "Brand Added Successfully",
      oData: brand,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
}