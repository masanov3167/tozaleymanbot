import { Telegraf } from "telegraf";
import addWord from "./add-words";
import removeProhibitedWords from "./remove-prohibited-words";
import onlyGroup from "../../middlewares/only-group";

const allHears = (bot: Telegraf) =>{
    bot.hears(/^\/add_word (.+)/, ctx => addWord(ctx));
    bot.on("text",onlyGroup, ctx => removeProhibitedWords(ctx));
}

export default allHears;