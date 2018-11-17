import jwt from 'jsonwebtoken';
import config from '../config.json';
import send from '../services/sendmail'

export async function getJWT({ email }: { email: string }) {
    const token = jwt.sign({
        email
    }, config.jwtSalt, {
            expiresIn: 30 * 60
        });
    // db.save(token)
    await send({ text: token })
    return token;
}