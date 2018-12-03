const email = require("emailjs");
const server = email.server.connect({
    user: "yuanzhang",
    password: "Yz1587567@hurry",
    host: "smtp.exmail.qq.com",
    ssl: true,//465,
    port: 465
});
export default async function send(token: string, emailAddr: string) {
    const msg = {
        text: `本次登陆token${token} 有效期20min，请尽快登陆使用`,
        from: "yuanzhang@vite.org",
        to: `${emailAddr}`,
    };
    return new Promise((res, rej) => {
        server.send(msg, function (err: Error, msg: string) {
            if (err) {
                rej(err)
            } else {
                res(msg)
            }
        })
    })
}