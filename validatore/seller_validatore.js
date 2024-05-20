
exports.checkSeller= async (req, res, next) => {
    try {
      const { sSellerName, sCity, sCars }= req.body;
     
      if (!sSellerName||!sCity||!sCars) {
        return res.status(404).json({ sMessage: "Please Fill All The Fields!" });
      }
  
      return next();
    } catch (error) {
      return res
        .status(500)
        .json({ sMessage: "Internal Server Error", sError: error.message });
    }
  };
  