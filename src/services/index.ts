import axios from 'axios';
import { history } from '../App';

let client = axios.create({
    baseURL: "/Bapi/v1",
    timeout: 2000,
    headers: { 'Content-Type': 'application/json' },
    transformResponse: [function (data) {
        const d = JSON.parse(data);
        if(d.code===-1){
            history.push('/verify')
        }
    }]
});


export const getJWT = async () => {
    return client.get('/JWT').then(({ data }) => {
        client = axios.create({
            baseURL: "/Bapi/v1",
            timeout: 2000,
            headers: { 'Content-Type': 'application/json', 'Vite-Token': data }
        });
    })
};

export async function getMetaInfo() {
    return client.get('/metaInfo')
}

export async function createDir({ name }: { name: string }) {
    return client.get('/dir')
}

export async function createJson({ dir, json }: { dir: string, json: object }) {
    return client.put('/Json', {
        params: {
            dir, json
        }
    })
}

export async function getJson({ id }: { id: string }) {
    return client.get('/Json', {
        params: {
            id
        }
    })
}

export async function updateJson({ id, json }: { id: string, json: object }) {
    return client.post('/Json', {
        params: {
            id, json
        }
    })
}
