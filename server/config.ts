const user = `vcc`;
const password = `vcc`;
const authMechanism = `SCRAM-SHA-1`;
const dbName = "vcc";
const port = 9011;
const host = 'localhost';
export default {
    "mailServer": {

    },
    "jwtSalt": "sadfjklfsdc!@#$##@#",
    "dbStr": `mongodb://${user}:${password}@${host}:${port}/?authMechanism=${authMechanism}&authSource=${dbName}`,
    port: 9018,
    host: '0.0.0.0',
    dbName:"vcc"
}
