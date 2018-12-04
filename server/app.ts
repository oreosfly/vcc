import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as BodyParser from 'koa-bodyparser';
import * as mongo from 'mongodb';
import config from './config';
import validate from './middlewares/validate';
import {getDb} from './initDb';

declare module 'koa' {
    interface BaseContext {
        token: string;
        db: mongo.Db | null;
    }
}
const App = new Koa();
const router = new Router({
    prefix: "/Bapi/v1/"
})
router.get('/meta')
router.post('/meta')
router.get('/entity')
router.post('/entity')
App.use(router.routes())
App.use(BodyParser({}));
App.use(validate({ exclude: /(^api)|(verify)/ }))


App.listen(config.port, config.host);
getDb()
App.addListener('error', (e) => {
    console.error(e)
})
