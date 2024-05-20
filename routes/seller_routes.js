const router=require('express').Router();

const {checkSeller}=require('../validatore/seller_validatore');
const {addSeller}=require('../controller/seller_controller');

router.post('/',checkSeller,addSeller);

module.exports=router;