const onlyPrivate = (ctx: any, next: Function) =>{
    if(ctx.chat.type !== "private"){
        return
    }
    next();
}

export default onlyPrivate;