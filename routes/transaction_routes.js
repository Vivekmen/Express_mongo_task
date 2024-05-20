const route=require('express').Router();

const {checkTransaction}=require('../validatore/transaction_validatore');
const {creatTransaction}=require('../controller/transaction_controller');

route.post('/',checkTransaction,creatTransaction);

module.exports=route