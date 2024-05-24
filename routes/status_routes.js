const router = require("express").Router();

const { totalCarSold,mostcarsoldcity,mostbrandcarsell,carsoldmost } = require("./../controller/status_controller");


router.get("/totalcarsold",  totalCarSold);
router.get("/mostsoldcity",mostcarsoldcity);
router.get("/mostbrandcarsell",mostbrandcarsell);
router.get("/carsoldmost",carsoldmost)
module.exports = router;
