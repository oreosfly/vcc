import { IMiddleware } from "koa-router";
import jwt from 'jsonwebtoken';
import config from '../config.json';

const validate: IMiddleware = async function (ctx, next) {
    const token = ctx.headers['vite-token'];
    if (!token) {
        return Promise.reject(new Error('no token'));
    }
    return new Promise(
        (res, rej) => {
            jwt.verify(token, config.jwtSalt, function (err: Error | undefined, decoded: object | undefined) {
                if (err) {
                    rej(err)
                } else {
                    res(decoded)
                }
            }as any)
        }
    )
}
