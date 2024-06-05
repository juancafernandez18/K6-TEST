import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    vus: 1,
    duration: '20s'
}

export  function smoke() {
    http.get('https://test.k6.io');
    console.log('funcion smoke')
    sleep(1);
    http.get('https://test.k6.io/contact.php');
    sleep(1);
    http.get('https://test.k6.io5');
    sleep(1);
}