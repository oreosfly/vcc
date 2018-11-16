import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import mongo from 'mongodb';
import assert from 'assert';
const URI=``;
// const dbName=``;
const port=9000;
const host='0.0.0.0';
const App=new Koa();



const router=new Router({
    prefix:"/api/v1/"
})
router.get('/meta')
router.post('/meta')
router.get('/entity')
router.post('/entity')
App.use(router.routes())
App.use(BodyParser({})); 

const client=new mongo.MongoClient(URI);
client.connect((err:Error|null) =>{
    assert.equal(null, err);
    // console.log("Connected successfully to server");
    // App.db = client.db(dbName);
  });
App.listen(port,host);
App.addListener('error',()=>{
    client.close();
})
