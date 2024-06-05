
import http from 'k6/http';
import { sleep } from 'k6';
import { smoke } from './smoke-test.js';
import { Loguin } from './loguin.js';

export const options = {
    vus: 10,
    duration: '1s'
}


export function setup() {
    console.log('-- setup stage --Loguin');
    let token = Loguin();
    sleep(10)
    return token
}

export default function (token) {
    
    console.log(token)
    http.get('https://sysacadweb.frre.utn.edu.ar/');
    sleep(1);
}


