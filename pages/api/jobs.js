// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jobs from '../../data/jobs';

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  const compareLocation = (a, b) => {
    const x = a.split(','), y = b.split(',');
    if(Number(x[0]) > Number(y[0])) return false;
    else if(x[0] == y[0] && Number(x[1] > Number(y[1]))) return false; 
    return true;
  }

  const compareExperience = (a, b) => {
    const priority = {
      Junior: 0,
      Internship: 1,
      Intermediate: 2,
      Senior: 3,
    };
    return priority[a] > priority[b];
  }

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
      });

      if(matched) matches.push(item);
    });

    if(matches.length) {
      if(filter.sort['title']) {
        matches = matches.sort((a, b) => (a.job_title > b.job_title) ? filter.sort['title'] : filter.sort['title'] * (-1));
      }
      if(filter.sort['date']) {
        matches = matches.sort((a, b) => (a.created > b.created) ? filter.sort['date'] : filter.sort['date'] * (-1));
      }
      if(filter.sort['location']) {
        matches = matches.sort((a, b) => compareLocation(a.location, b.location) ? filter.sort['location'] : filter.sort['location'] * (-1));
      }
      if(filter.sort['experience']) {
        matches = matches.sort((a, b) => compareExperience(a.experience, b.experience) ? filter.sort['experience'] : filter.sort['experience'] * (-1));
      }

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
