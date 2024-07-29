import { Telegraf } from "telegraf";
import removeServiceMessages from "./remove-service-messages";


const allUpdates = (bot: Telegraf) =>{
    bot.on("new_chat_members", ctx => removeServiceMessages(ctx));
    bot.on("left_chat_member", ctx => removeServiceMessages(ctx));
}
export default allUpdates;