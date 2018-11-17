import axios from 'axios';

const client = axios.create({
    baseURL: "/Bapi/v1",
    timeout: 2000,
    headers: { 'Content-Type': 'application/json' }
});


export async function getJWT() {
    return client.get('/JWT')
}

export async function getMetaInfo() {
    return client.get('/metaInfo')
}

export async function createDir({name}:{name:string}) {
    return client.get('/dir')
}




export async function createJson({dir,json}:{dir:string,json:object}) {
    return client.put('/Json',{
        params:{
            dir,json
        }
    })
}

export async function getJson({ id }:{id:string}) {
    return client.get('/Json', {
        params: {
            id
        }
    })
}

export async function updateJson({id,json}:{id:string,json:object}){
        return client.post('/Json', {
        params: {
            id,json
        }
    })
}
