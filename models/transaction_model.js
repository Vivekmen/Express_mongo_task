const mong = require('mongoose')

const transactionModel = new mong.Schema({
    iCustomerId: {
        type: mong.Schema.Types.ObjectId,
        ref: "User"
    }, 
    iCarsId: {
        type: mong.Schema.Types.ObjectId,
        ref: "Cars"
    }, 
    iSellerId: {
        type: mong.Schema.Types.ObjectId,
        ref: "Seller"
    }
})

const Transaction = mong.model("Transaction", transactionModel)

module.exports = Transaction