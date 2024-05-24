const express = require("express");
const router = require("./routes/index");
require("dotenv").config();
const config = require("./utils/config");
const app = express();
const dbConnect = require("./utils/database");
const cron = require("node-cron");
const usermodel = require("./models/user_model");
app.use(express.json());

app.use("/api", router);
cron.schedule(" 0 */1 * * *", async () => {
  const enumvalue=["Y","N"]
  const statusofuser = await usermodel.find({ eStatus: {$in:["Y","N"]} });

 
  for (const user of statusofuser) {
   
    const cIndex = enumvalue.indexOf(user.eStatus);
    const nIndex= (cIndex + 1) % enumvalue.length; 

    const viveks=123;
    await usermodel.updateOne({ _id: user._id }, { $set: { eStatus: enumvalue[nIndex] } });
  }
});

app.listen(config.PORT, () => {
  console.log(`Server is listening on port ......`);
});
// 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3
dbConnect();
