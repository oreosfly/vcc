import jwt from 'jsonwebtoken';
import config from '../config';
import send from '../services/sendmail';
import { IMiddleware } from "koa-router";

export const getJWT: IMiddleware = async function (ctx, next) {
    const emailAddr = ctx.body.emailAddr;

    const token = jwt.sign({
        emailAddr
    }, config.jwtSalt, {
            expiresIn: 30 * 60
        });
    // db.save(token)
    try {
        await send(token, emailAddr)
    } catch (e) {

    }

}

export const getMeta: IMiddleware = async function (ctx, next) {

}