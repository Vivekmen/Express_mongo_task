const Transaction=require('../models/transaction_model');
exports.creatTransaction=async (req,res,next)=>{
 try{
  const {iCustomerId,iCarsId,iSellerId}=req.body;
  

  const transaction=await Transaction.create({
    iCustomerId,
    iCarsId,
    iSellerId
  })
    return res.status(201).json({
    sMessage: "transaction data added Successfully",
    oData: transaction,
  });

 }catch(err){
    return res
      .status(500)
      .json({ sMessage: "Internal Server Error", sError: err.message });
 }
}