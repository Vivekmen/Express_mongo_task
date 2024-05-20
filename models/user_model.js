const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    sUserName: {
      type: String,
      required: true,
    },
    sName: {
      type: String,
      required: true,
    },
    sCity: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);