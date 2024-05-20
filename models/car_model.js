const mongoose=require('mongoose')

const carSchema = new mongoose.Schema(
    {
      sCarName: {
        type: String,
        required: true,
      },
      ibrand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Brand",
      },
      nYear:{
        type:Number,
        required:true
      },
      sEngine:{
        type:String,
        required:true
      }
    },
    { timestamps: true }
  );
  const Car=mongoose.model("Car", carSchema);
  module.exports =Car