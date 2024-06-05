import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 10,
    duration: '1s'
}

export default function () {
    http.get('https://sysacadweb.frre.utn.edu.ar/');
    sleep(1);
}