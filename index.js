const express=require('express');
const router=require('./routes/index')
require("dotenv").config();
const config = require("./utils/config");
const app=express()
const dbConnect= require("./utils/database");

app.use(express.json())

app.use("/api", router);

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ......`);
});
// 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3
dbConnect();  