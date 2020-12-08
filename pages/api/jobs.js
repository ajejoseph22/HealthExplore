// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from '../../data/filters';
import jobs from '../../data/jobs.json';

const WordPos = require('wordpos');
const wordpos = new WordPos();

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  const requestedFilters = req.query.filters;
  const sortBy = req.query.sortBy;
  let searchItems = [];
  if (req.query.search && req.query.search.includes(" ")) {
    searchItems = await wordpos.getNouns(req.query.search);
  } else {
    searchItems = [req.query.search];
  }
  // searchItems = [...searchItems];
  const searchKeyword = new RegExp(searchItems.join('|'), 'ig');
  console.log(searchKeyword);

  let filteredJobs = [];
  if (req.query.search) {
    filteredJobs = jobs.filter(job => {
      return searchKeyword.test(job.job_title) || searchKeyword.test(job.name);
    });
  
    filteredJobs.forEach(job => {
      job.items = job.items.filter(jobDetail => {
        return searchKeyword.test(jobDetail.city) || searchKeyword.test(jobDetail.job_type) || searchKeyword.test(jobDetail.job_title);
      });
    });
  } else {
    filteredJobs = jobs;
  }

  // apply filter.

  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));
  
  res.json({
    jobs: filteredJobs
  });
}
