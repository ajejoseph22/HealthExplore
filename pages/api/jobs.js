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

async function sortJobsAsc(jobList, field) {
  let tempArray = jobList;

  if (field == 'Location')
    return await tempArray.sort((a, b) => {
      return a.items[0].state.localeCompare(b.items[0].state);
    });
  else if (field == 'Role')
    return await tempArray.sort((a, b) => {
      return a.job_title.localeCompare(b.job_title);
    });
  else if (field == 'Department')
    return await tempArray.sort((a, b) => {
      return a.items[0].department[0].localeCompare(b.items[0].department[0]);
    });
  else if (field == 'Education')
    return await tempArray.sort((a, b) => {
      return a.items[0].required_credentials[0].localeCompare(b.items[0].required_credentials[0]);
    });
  else if (field == 'Experience')
    return await tempArray.sort((a, b) => {
      return a.items[0].experience.localeCompare(b.items[0].experience);
    });
}

async function sortJobsDesc(jobList, field) {
  let tempArray = jobList;

  if (field == 'Location')
    return await tempArray.sort(function (a, b) {
      return b.items[0].state.localeCompare(a.items[0].state);
    });
  else if (field == 'Role')
    return await tempArray.sort((a, b) => {
      return b.job_title.localeCompare(a.job_title);
    });
  else if (field == 'Department')
    return await tempArray.sort((a, b) => {
      return b.items[0].department[0].localeCompare(a.items[0].department[0]);
    });
  else if (field == 'Education')
    return await tempArray.sort((a, b) => {
      return b.items[0].required_credentials[0].localeCompare(a.items[0].required_credentials[0]);
    });
  else if (field == 'Experience')
    return await tempArray.sort((a, b) => {
      return b.items[0].experience.localeCompare(a.items[0].experience);
    });
}

function countPositions(jobList) {
  return jobList.reduce(function (a, b) {
    return a + b['total_jobs_in_hospital'];
  }, 0);
}

//Filter jobs by search term
async function searchJobs(jobList, term) {
  return new Promise((resolve) => {
    let tempArray = [];

    jobList.map((item) => {
      let tempJobs = [];
      item.items.map((job) => {
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

//Sort jobs
async function sortJobs(jobList, field, type) {
  return new Promise(async (resolve) => {
    let tempArray = [];

    if (type == 'asc') {
      tempArray = await sortJobsAsc(jobList, field);
      resolve({
        newJobList: tempArray
      })
    }
    else if (type == 'desc') {
      tempArray = await sortJobsDesc(jobList, field);
      resolve({
        newJobList: tempArray
      })
    }
    else if (type == 'neutral') {
      resolve({
        newJobList: jobList
      })
    }
    else {
      console.log('Something went wrong with sorting');
    }


  })
}

export default async (req, res) => {

  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    const searchTerm = req.query.term;
    const sortField = req.query.sortField;
    const sortType = req.query.sortType;

    // @todo: implement automated tests

    // this timeout emulates unstable network connection, do not remove this one
    // you need to figure out how to guarantee that client side will render
    // correct results even if server-side can't finish replies in the right order
    await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

    if (searchTerm) {
      //Searching for something specific
      if (sortField && sortType) {
        searchJobs(jobs, searchTerm)
          .then(searchResult => {
            sortJobs(searchResult.newJobList, sortField, sortType).then(sorted => {
              res.json({ jobs: sorted.newJobList, total_jobs: 11 })
            })
          })
      }
      else {
        searchJobs(jobs, searchTerm)
          .then(searchResult => {
            res.json({ jobs: searchResult.newJobList, total_jobs: 12 })
          })
      }

    }
    else {
      //Returning all jobs
      if (sortField && sortType) {
        sortJobs(jobs, sortField, sortType)
          .then(sorted => {
            res.json({ jobs: sorted.newJobList, total_jobs: countPositions(jobs) })
          })
      }
      else {
        res.json({ jobs, total_jobs: countPositions(jobs) })
      }
    }
  }
  else {
    res.statusCode = 404;
  }
}
