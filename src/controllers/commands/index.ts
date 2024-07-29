import { Telegraf } from "telegraf";
import start from "./start";
import onlyPrivate from "../../middlewares/only-private";


const allCommands = (bot: Telegraf) =>{
    bot.start( onlyPrivate,  ctx => start(ctx));
}

export default allCommands;