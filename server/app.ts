import Koa from 'koa';
import BodyParser from 'koa-bodyparser';
import mongo from 'mongodb';
import assert from 'assert';
import config from './config';
import validate from './middlewares/validate';
import {reponseBody} from 'middlewares/reponseBody';
import router from './router';

declare module 'koa' {
    interface BaseContext {
        token: string;
        db: mongo.Db | null;
    }
}

const App = new Koa();



App.use(reponseBody())
App.use(router.routes())
App.use(BodyParser({}));
App.use(validate({ exclude: /(^api)|(verify)/ }))

const client = new mongo.MongoClient(config.dbStr);

client.connect((err: Error | null) => {
    assert.equal(null, err);
    // console.log('connect db successfullllll');
    App.listen(config.port, config.host);
    App.context.db = client.db(config.dbName)
    // console.log('start app successfulllllll')
});

App.addListener('error', (e) => {
    console.log(e)
    client.close();
})
