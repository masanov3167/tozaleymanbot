import { BotCtx } from "../../types/context";
import handlerProvider from "../../utils/handler-provider";


const handler = (ctx: BotCtx) =>{
    ctx.reply("Salom, men guruhlarda begilangan so'zlarni avtomatik o'chiraman");
}

const start = ctx => handlerProvider(ctx, handler);
export default start;