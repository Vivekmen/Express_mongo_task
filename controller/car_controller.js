const Car = require('../models/car_model')
const Brand = require('../models/brand_model')

exports.addCar = async (req, res) => {
    try {
        const { sCarName, nYear, ibrand,sEngine} = req.body
        const carBrand = await Brand.findOne({ sName: ibrand})
        
        if(carBrand) {
            const car = await Car.create({
                sCarName,
                nYear,
                ibrand: carBrand._id,
                sEngine,
            })
            return res.status(200).json({
                message: "Car added successfully",
                data: car
            })
        } else {
            return res.status(404).json({
                message: "Car brand not found"
            })
        }
        
    } catch (err) {
        res.status(500).json({
            message: "Internal server Error"
        })
    }
}