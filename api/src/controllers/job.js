/* eslint-disable */
import { Router } from 'express';
import { jobItem } from '../services';

const router = Router();

router.get('/list', async (req, res, next) => {
  const { q = '', department, location, experience, role } = req.query;

  // const jobs = await job.aggregate([
  //   {
  //     $lookup: {
  //       from: 'jobitems',
  //       let: { name: '$name' },
  //       pipeline: [
  //         {
  //           $match: {
  //             $expr: { $eq: ['$name', '$$name'] },
  //             name: { $regex: '/asdqw/g' }
  //           }
  //         },
  //         { $sort: { created: -1 } }
  //       ],
  //       as: 'items'
  //     }
  //   }
  // ]);

  return res.json(
    await jobItem.findJobs(q, department, location, experience, role)
  );
});

router.get('/totalCount', async (req, res, next) => {
  const { q = '' } = req.query;

  const totalCount = await jobItem.getCounts(q);

  return res.json({ totalCount });
});

router.get('/getFilters', async (req, res, next) => {
  return res.json(await jobItem.getFilters());
});

export default router;
