import WORDS from "../../schemas/words";
import { BotCtx } from "../../types/context";
import handlerProvider from "../../utils/handler-provider";


const handler = async (ctx: BotCtx) =>{
    const text = ctx.message.text.substring(10).trim();
    const find = await WORDS.findOne({group_id: ctx.chat.id, text: {'$regex' : text, '$options' : 'i'}});
    
    if(!find){
        const newWord = new WORDS({group_id:ctx.chat.id, text});
        await newWord.save();
        ctx.reply(`${text} - muvaffaqiyatli bazaga saqlandi!`);
        return
    }
    
    ctx.reply("Ushbu so'z allaqachon saqlangan, boshqa so'z saqlashga harakat qiling")
}

const addWord = ctx => handlerProvider(ctx, handler);
export default addWord;