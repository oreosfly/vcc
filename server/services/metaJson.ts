import * as mongo from 'mongodb';
import * as assert from 'assert';
import {getDb} from '../initDb';
let metaJsonCache={};
let jsonCache={};
async function insertDir(dirName:string) {
    const db=await getDb();
    const metaJson=await db.collection("metaJson");
    return await metaJson.findOneAndUpdate({dirName},{$setOnInsert:{dirName,children:[]}},{upsert:true})
}
async function delDir(dirId:string) {
    const db=await getDb();
    const metaJson=await db.collection("metaJson");
    return await metaJson.findOneAndDelete({dirId});
}
async function delJson({dirId,jsonId}:{dirId:mongo.ObjectId,jsonId:mongo.ObjectId}) {
    const db=await getDb();
    const metaJson=await db.collection("metaJson");
    const json=await db.collection("json");
    await metaJson.findOneAndUpdate({dirId},{$pull:{children:jsonId}});
    await json.deleteOne({jsonId});
    return await reloadMeta({dirId})
}
async function insertJson({dirId,jsonKey,content={}}:{dirId:mongo.ObjectId,jsonKey:string,content:object}) {
    const db=await getDb();
    const metaJson=await db.collection("metaJson");
    const json=await db.collection("json");
    const items=await json.insertOne({jsonKey,content});
    await metaJson.findOneAndUpdate({dirId},{$push:{children:items.insertedId}});
    await reloadJson({jsonId:items.insertedId});
    return await reloadMeta({dirId})
}

async function updateJson({jsonId,content}:{jsonId:mongo.ObjectId,content:object}) {
    const db=await getDb();
    const json=await db.collection("json");
    return await json.findOneAndUpdate({jsonId},{$set:{content}});
}

async function reloadJson({jsonId}:{jsonId?:mongo.ObjectId}){
    const db=await getDb();
    const json=await db.collection("json");
    if(!jsonId){
        const res=await json.find();
        const n={};
        res.forEach(t=>{
            n[t.ObjectId]=t.content
        })
        jsonCache=n;
        return jsonCache;
    }
    const res=await json.findOne({jsonId});
    if(!res){
        throw new Error(`no Obj for id:${jsonId.toHexString()}`)
    }
    jsonCache[jsonId.toHexString()]=res.content;
}

async function reloadMeta({dirId}:{dirId?:mongo.ObjectId}){
        const db=await getDb();
    const metaJson=await db.collection("json");
    if(!dirId){
        const res=await metaJson.find();
        const n={};
        res.forEach(t=>{
            n[t.ObjectId]=t.content
        })
        metaJsonCache=n;
        return metaJsonCache;
    }
    const res=await metaJson.findOne({dirId});
    if(!res){
        throw new Error(`no Obj for id:${dirId.toHexString()}`)
    }
    metaJsonCache[dirId.toHexString()]=res;

}