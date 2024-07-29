import { Telegraf } from "telegraf";
import allCommands from "./commands";
import allUpdates from "./updates";
import allHears from "./hears";


const allControllers = (bot: Telegraf) =>{
    allUpdates(bot);
    allCommands(bot);
    allHears(bot);
}

export default allControllers;