const Car = require('../models/car_model')
const Brand = require('../models/brand_model')
const Transaction=require('../models/transaction_model');
const Seller = require("../models/seller_model");
const User=require('../models/user_model')

exports.totalCarSold=async(req,res)=>{
   
    const totalcarsold=await Transaction.aggregate([
        {$group:{
          _id:null,
          count:{$sum:1}
        }}
      ])
     
     return res.status(200).json({
        message: "Total car sold",
        nTotalcarsold:totalcarsold[0].count
    })
}

exports.mostcarsoldcity=async(req,res)=>{
    const mostcarsold=await Transaction.aggregate(
        [
            {
              $lookup: {
                from: "sellers",
                localField: "iSellerId",
                foreignField: "_id",
                as: "carresult"
              }
            },
            {
              $unwind: "$carresult"
            },
            {
              $group: {
                _id: "$carresult.sCity",
                count: { $sum: 1 }
              }
            },
            {
              $sort: { count: -1 }
            },
            {
              $limit: 1
            }
          ]
    )
    return res.status(200).json({
        message: "Most Car Sold In City",
        aTotalcarsold:mostcarsold
    })
}

exports.carsoldmost=async(req,res)=>{
    const carsoldmost=await Transaction.aggregate(
        [
            {
              $lookup: {
                from: "cars",
                localField: "iCarsId",
                foreignField: "_id",
                as: "result"
              }
            },
            {
              $unwind: "$result"
            },
            {
              $group:{
                _id:"$result.sCarName",
                count:{$sum:1}
              }
            },{
              $sort:{"count":-1}
            },
            {
              $limit:1
            }
          ]
    )
    return res.status(200).json({
        message: "Most car Sell",
        sData:carsoldmost[0]._id
    })
}

exports.mostbrandcarsell=async(req,res)=>{

    const mostbrandcarsell=await Transaction.aggregate(
        [
            {
              $lookup: {
                from: "cars",
                localField: "iCarsId",
                foreignField: "_id",
                as: "result"
              }
            },
            {
              $unwind: "$result"
            },{
              $group: {
                _id: "$result.ibrand",
                 count:{$sum:1}
              }
            },
            {$sort:{"count":-1}},
            {
              $limit:1  
            },
            {
              $lookup: {
                from: "brands",
                localField: "_id",
                foreignField: "_id",
                as: "result3"
              }
            },
            {
              $unwind:"$result3"
            }
          ]
    )
    return res.status(200).json({
        message: "Most brand car Sell",
        sBrand:mostbrandcarsell[0].result3.sName
    })
}