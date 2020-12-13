// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from '../../data/jobs';

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  let ret = [], matches, matched, filter = req.body.filter;
  jobs.forEach(job => {
    matches = [];
    job.items.forEach(item => {
      matched = true;
      if(item.name.toLowerCase().indexOf(filter.searchKey.toLowerCase()) == -1 && item.job_title.toLowerCase().indexOf(filter.searchKey.toLowerCase()) == -1) matched = false;

      Object.keys(filter.filters).map(element => {
        if(typeof item[element] == 'string' && item[element] != filter.filters[element][0]) matched = false;
        else {
          filter.filters[element].forEach(candidate => {
            if(item[element].indexOf(candidate) == -1) matched = false;
          });
        }
      })

      if(matched) matches.push(item);
    });

    if(matches.length) {
      ret.push({
        total_jobs_in_hospital: matches.length,
        name: job.name,
        job_title: job.job_title,
        items: matches
      });
    }
  });

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));
  
  res.json(ret);
}
