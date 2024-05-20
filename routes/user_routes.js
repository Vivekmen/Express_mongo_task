const route=require('express').Router();

const {checkUser}=require('../validatore/user_validatore');
const {creatuser}=require('../controller/user_controller');

route.post('/',checkUser,creatuser);

module.exports=route