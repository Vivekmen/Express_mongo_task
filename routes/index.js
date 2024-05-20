const route = require("express").Router();

const brandroute = require('./brand_routes');
const carroute=require('./car_routes');
const sellerroute=require('./seller_routes');
const userroute=require('./user_routes')
const transaction=require('./transaction_routes');
route.use('/v1/brand', brandroute);
route.use('/v1/car',carroute);
route.use('/v1/seller',sellerroute);
route.use('/v1/user',userroute);
route.use('/v1/transaction',transaction)

module.exports = route;
