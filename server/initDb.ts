import * as assert from 'assert';
import config from './config';
import * as mongo from 'mongodb';
mongo.MongoClient

const client = new mongo.MongoClient(config.dbStr);
let db: mongo.Db;
export async function getDb(): Promise<mongo.Db> {
    if (db) {
        return Promise.resolve(db)
    }
    await client.connect();
    return await client.db(config.dbName);
}
