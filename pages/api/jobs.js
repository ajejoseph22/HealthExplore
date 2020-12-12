// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//Data
import jobs from '../../data/jobs';

//Helper functions
const arrayToUppercase = (arr) => {
  let tempArray = [];
  if (arr && arr.length > 0) {
    arr.map((item) => {
      tempArray.push(item.toUpperCase());
    })
  }

  return tempArray;
}

//Count total open positions
function countPositions(jobList) {
  return jobList.reduce(function (a, b) {
    return a + b['total_jobs_in_hospital'];
  }, 0);
}

//Filter jobs by search term
async function searchJobs(jobList, term) {
  return new Promise((resolve) => {
    let tempArray = [];

    jobList.map((item, index) => {
      let tempJobs = [];
      item.items.map((job, jobIndex) => {
        if (//Search by state
          (job.state == term.toUpperCase()) ||
          //Search by job title
          ((arrayToUppercase((job.job_title).split(' '))).includes(term.toUpperCase())) ||
          //Search by keywords in description
          (arrayToUppercase((job.description).split(' ')).includes(term.toUpperCase()))
        ) {
          tempJobs.push(job);
        }
      })
      if (arrayToUppercase((item.name).split(' ')).includes(term.toUpperCase())) {
        tempArray.push(item);
      }
      else if (tempJobs.length > 0) {
        tempArray.push({ ...item, items: tempJobs })
      }
    })

    resolve({
      newJobList: tempArray
    })
  })
}

export default async (req, res) => {

  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const searchTerm = req.query.term;

    // @todo: implement automated tests

    // this timeout emulates unstable network connection, do not remove this one
    // you need to figure out how to guarantee that client side will render
    // correct results even if server-side can't finish replies in the right order
    await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

    if (searchTerm) {
      //Searching for something specific
      searchJobs(jobs, searchTerm)
        .then(result => {
          console.log(result);
          res.json({ jobs: result.newJobList, total_jobs: countPositions(jobs) })
        })
    }
    else {
      //Returning all jobs
      res.json({ jobs, total_jobs: countPositions(jobs) })
    }
  }
  else {
    res.statusCode = 404;
  }
}
