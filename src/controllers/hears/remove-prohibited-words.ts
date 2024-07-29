import WORDS from "../../schemas/words";
import { BotCtx } from "../../types/context";
import handlerProvider from "../../utils/handler-provider";

const handler = async(ctx: BotCtx) =>{ 
    const text = ctx.message.text.trim();
    const check = await ctx.getChatMember(ctx.from.id);
    const isAdmin = check && check.status !== "member";
    if(!isAdmin){
        const find = await WORDS.findOne({group_id: ctx.chat.id, text: {'$regex' : text, '$options' : 'i'}});
        if(find){
            await ctx.deleteMessage().catch(e => console.log(`Ta'qiqlangan so'zni o'chirishdagi xatolik: ${String(e)}`));
            return 
        }
    }
}

const removeProhibitedWords =ctx => handlerProvider(ctx, handler);
export default removeProhibitedWords;