// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from '../../data/jobs.json';

export default async (req, res) => {
  const {
    query
  } = req;
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests
  const data = jobs;
  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));

  res.json(data)
}
