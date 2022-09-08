import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
const hoshiurl = 'http://192.168.54.125:3000/kokoike/';
const matunaga = 'http://192.168.54.246:8080/';
const hosinc = 'http://192.168.54.125:8888/';
const takatomourl = 'http://192.168.54.129:3000/api/notNotAstar';

export const post = () => {
    axios.post(takatomourl, {
        "type": "watanabe",
        "data": [
            { "lat": 38.724383418459915, "lng": 141.03383302688601 },
            { "lat": 38.723977459970556, "lng": 141.0337579250336 },
            { "lat": 38.72345012900448, "lng": 141.0341012477875 },
            { "lat": 38.72393142329519, "lng": 141.03344678878787 },
            { "lat": 38.72369286913891, "lng": 141.03333413600924 }

        ]
    })
        .then(function (res) {
            console.log('Hoshi post');
        })

}

const testpost = (req: NextApiRequest, res: NextApiResponse) => {
    post();
    res.write('post finish');
    res.end();
}
export default testpost;