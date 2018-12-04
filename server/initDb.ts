import * as assert from 'assert';
import config from './config';
import * as mongo from 'mongodb';

const client = new mongo.MongoClient(config.dbStr);
let db: mongo.Db | null = null;
export async function getDb() {
    if (db) {
        return Promise.resolve(db)
    }
    new Promise((res, rej) => {
        client.connect((err: Error | null) => {
            assert.equal(null, err);
            // console.log('conect db successfullllll');
            db = client.db(config.dbName)
            res(db as mongo.Db);
            // console.log('start app successfulllllll')
        });
    })

}
