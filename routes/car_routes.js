const router=require('express').Router();

const {checkCar}=require('../validatore/car_validatore');
const {addCar}=require('../controller/car_controller');

router.post('/',checkCar,addCar);

module.exports=router;