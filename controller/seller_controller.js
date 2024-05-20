const Car = require("../models/car_model");
const Seller = require("../models/seller_model");

exports.addSeller = async (req, res, next) => {
  try {
  const { sSellerName, sCity, sCars } = req.body;
  const Carfound = await Car.findOne({ sCarName: sCars });
    if (Carfound) {
      const sellerdata = await Seller.create({
        sSellerName,
        sCity,
        iCars: Carfound._id,
      });
      return res.status(200).json({
        message: "seller add successfully",
        data: sellerdata,
      }) 
    } else {
      return res.status(404).json({
        message: "Car not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server Error",
    });
  }
};
