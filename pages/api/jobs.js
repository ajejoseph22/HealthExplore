// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import filters from '../../data/filters';
import jobs from '../../data/jobs.json';

import _ from 'lodash';

const WordPos = require('wordpos');
const wordpos = new WordPos();

import { applyActiveFilters, applySearchfilter, applySortingModifiers } from '../../utils/jobFilteringUtils';

export default async (req, res) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // console.log('working', req.headers['active_filters'], req.headers['sorting_modifiers']);
  const activeFilters = JSON.parse(req.headers['active_filters'] || JSON.stringify({}));
  const sortingModifiers = JSON.parse(req.headers['sorting_modifiers'] || JSON.stringify({}));
  // console.log(activeFilters, sortingModifiers);
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
    // console.log(filteredJobs.length)
  }

  // apply activeFilters if any.
  if (activeFilters && Object.keys(activeFilters).length > 0) {
    filteredJobs = applyActiveFilters(filteredJobs, activeFilters);
  }

  // apply sorting modifier.
  filteredJobs = applySortingModifiers(filteredJobs, sortingModifiers);

  // Go through listings and see if length jobs inside those are zero, if there are don't show the listings.
  filteredJobs = filteredJobs.filter(job => {
    if (job.items && job.items.length > 0) {
      return true;
    } else {
      return false;
    }
  })

  // @todo: implement automated tests

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve)=>setTimeout(resolve, 1000 * Math.random()));
  
  res.json({
    jobs: filteredJobs
  });
}


