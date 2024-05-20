
exports.checkCar= async (req, res, next) => {
  try {
    const { sCarName, nYear, ibrand,sEngine}= req.body;
   
    if (!sCarName||!nYear||!ibrand||!sEngine) {
      return res.status(404).json({ sMessage: "Please Fill All The Fields!" });
    }

    return next();
  } catch (error) {
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: error.message });
  }
};
