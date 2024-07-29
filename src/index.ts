import { Telegraf } from "telegraf";
import ENV from "./constants/env";
import allControllers from "./controllers";
import mongoose from "mongoose";


const bot = new Telegraf(ENV.token);
mongoose.connect(ENV.mongoUrl).then(() => console.log("ulandi")).catch((e) => console.log(e))
allControllers(bot);

bot.launch({dropPendingUpdates:true});
console.log("bot ishga tushdi");