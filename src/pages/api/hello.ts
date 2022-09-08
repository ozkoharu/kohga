// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  axios.get('http://localhost:3000/api/')
    .then(function (response) {
      res.write(response);
    })
    .catch((e) => {
      console.log(e.console.error());
    })
    .finally(() => {
      console.log('finish');
    })
}
