import { BotCtx } from "../types/context";


const handlerProvider = (ctx: BotCtx, handler: Function) =>{
    try{
        handler(ctx);
    }catch(e){
        console.log(String(e));
    }
}

export default handlerProvider