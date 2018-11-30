import { IMiddleware } from "koa-router";
import jwt from 'jsonwebtoken';
import config from '../config';

declare type test=  (name:string)=>boolean;
interface ValidateOpt {
    // include:RegExp|Function,
    exclude: RegExp | test;
}
function test(str: string, assert: RegExp | test | undefined): boolean {
    if (assert === undefined) {
        return true;
    }
    if (assert instanceof RegExp) {
        return assert.test(str)
    } else {
        return assert(str)
    }
}
export default function (opt: ValidateOpt) {
    const validate: IMiddleware = async  (ctx, next)=> {
        if (test(ctx.path, opt.exclude)) {
            return await next();
        }
        const token = ctx.headers['vite-token'];
        if (!token) {
            ctx.body = {
                code: -1,
                msg: 'no token',
                data: null
            }
            return await next();
        }
        try {
            await new Promise(
                (res, rej) => {
                    jwt.verify(token, config.jwtSalt, function (err: Error | undefined, decoded: object | undefined) {
                        if (err) {
                            rej(err)
                        } else {
                            res(decoded)
                        }
                    } as any)
                }
            )
        } catch (e) {
            ctx.body = {
                code: -1,
                msg: JSON.stringify(e),
                data: null
            }
        }

        ctx.token = token;
        await next();
    }
    return validate;
}

