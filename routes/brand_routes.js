const router = require("express").Router();

const { creatBrand } = require("./../controller/brand_controller");
const { checkBrand } = require("./../validatore/brand_validatore");

router.post("/", checkBrand, creatBrand);

module.exports = router;
