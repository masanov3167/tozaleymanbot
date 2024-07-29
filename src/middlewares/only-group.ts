const onlyGroup = (ctx: any, next: Function) => {
    if (ctx.chat.type !== 'group' && ctx.chat.type !== 'supergroup') {
        return;
    }
    next();
}

export default onlyGroup;