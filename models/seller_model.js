const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
  {
    sSellerName: {
      type: String,
      required: true,
    },
    sCity: {
      type: String,
      required: true,
    },
    iCars:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
      },
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Seller", sellerSchema);