// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from '../../data/filters';
import jobs from '../../data/jobs.json';

import _ from 'lodash';

const WordPos = require('wordpos');
const wordpos = new WordPos();

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  console.log('working', req.headers['active_filters'], req.headers['sorting_modifiers']);
  const activeFilters = JSON.parse(req.headers['active_filters'] || JSON.stringify({}));
  const sortingModifiers = JSON.parse(req.headers['sorting_modifiers'] || JSON.stringify({}));
  console.log(activeFilters, sortingModifiers);
  let searchItems = [];
  if (req.query.search && req.query.search.includes(" ")) {
    searchItems = await wordpos.getNouns(req.query.search);
  } else {
    searchItems = [req.query.search];
  }
  // searchItems = [...searchItems];
  const searchRegex = new RegExp(searchItems.join('|'), 'ig');

  let filteredJobs = JSON.parse(JSON.stringify(jobs));

  if (req.query.search) {
    filteredJobs = applySearchfilter(filteredJobs, searchRegex);
    console.log(filteredJobs.length)
  }

  // apply activeFilters if any.
  if (activeFilters && Object.keys(activeFilters).length > 0) {
    filteredJobs = applyActiveFilters(filteredJobs, activeFilters);
  }

  // apply sorting modifier.
  filteredJobs = applySortingModifiers(filteredJobs, sortingModifiers);


  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));
  
  res.json({
    jobs: filteredJobs
  });
}

function applySearchfilter(filteredJobs, searchRegex) {
  filteredJobs = filteredJobs.filter(job => {
    return searchRegex.test(job.job_title) || searchRegex.test(job.name);
  });
  filteredJobs.forEach(job => {
    job.items = job.items.filter(jobDetail => {
      return searchRegex.test(jobDetail.city) || searchRegex.test(jobDetail.job_type) || searchRegex.test(jobDetail.job_title);
    });
  });
  return filteredJobs;
}

function applySortingModifiers(filteredJobs, sortingModifiers) {
  for (let sortingField of Object.keys(sortingModifiers)) {
    switch(sortingModifiers[sortingField]) {
      case 'asc':
        filteredJobs = applySortOnJobItems(filteredJobs, sortingField, 'asc');
        break;
      case 'desc':
        filteredJobs = applySortOnJobItems(filteredJobs, sortingField, 'desc');
        break;
      default:
    }
  }
  return filteredJobs;
}

function applySortOnJobItems(filteredJobs, sortKey, sortOrder) {
  
  let morphedSortKey = '';
  switch(sortKey) {
    case 'location':
      morphedSortKey = 'city'
      break;
    default:
      morphedSortKey = sortKey;
  }

  for (let job of filteredJobs) {
    job.items = _.sortBy(job.items, item => item[morphedSortKey]);
    // console.log(sortOrder, job.items[0].city);
    if (sortOrder == 'desc') {
      job.items.reverse();
    }
    // console.log(sortOrder, job.items[0].city);

  }
  return filteredJobs;
}

function applyActiveFilters(filteredJobs, activeFilters) {
  filteredJobs.forEach(job => {
    job.items.filter(item => {
      for (let activeFilterKey of Object.keys(activeFilters)) {
        if (activeFilters[activeFilterKey].includes(item[activeFilterKey])) {
          return true;
        }
      }
      return false;
    });
  });
  return filteredJobs;
}

