const email = require("emailjs");
const server = email.server.connect({
    user: "username",
    password: "password",
    host: "smtp.your-email.com",
    ssl: true
});

export default function send(t:object) {
    return new Promise((res, rej) => {
        const content = {}
        server.send(content, function (err:Error, msg:string) {
            if (err) {
                rej(err)
            } else {
                res(msg)
            }
        })
    })
}