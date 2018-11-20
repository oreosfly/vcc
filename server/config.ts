const user = `root`;
const password = `example`;
const authMechanism = `SCRAM-SHA-1`;
const dbName = "vcc";
export default {
    "mailServer": {

    },
    "jwtSalt": "sadfjklfsdc!@#$##@#",
    "dbStr": `mongodb://${user}:${password}@localhost:27017/?authMechanism=${authMechanism}&authSource=${dbName}`,
    port: 9000,
    host: '0.0.0.0',
    dbName
}