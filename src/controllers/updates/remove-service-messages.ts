import { BotCtx } from "../../types/context";
import handlerProvider from "../../utils/handler-provider";

const handler = async (ctx: BotCtx) =>{
    console.log(ctx.chat);
    await ctx.deleteMessage().catch(e => console.log(String(e)))
}

const removeServiceMessages = ctx => handlerProvider(ctx, handler);
export default removeServiceMessages;