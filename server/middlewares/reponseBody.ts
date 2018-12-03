import { IMiddleware } from "koa-router";

export  function reponseBody() {
    const wrapper: IMiddleware = async (ctx, next) => {
        try { await next() } catch (e) {
            if (e instanceof catchAbleError) {
                ctx.body = {
                    code: e.code,
                    msg: e.message,
                    tips: e.tips
                }
            }
            else {
                ctx.body = {
                    code: -2
                }
            }
            return;
        }
        const data = ctx.body;
        ctx.body = {
            code: 0,
            data
        }

    }
    return wrapper;
}

