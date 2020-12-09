import _ from 'lodash';

export function applySearchfilter(filteredJobs, searchRegex) {
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
  
  export function applySortingModifiers(filteredJobs, sortingModifiers) {
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
  
  export function applySortOnJobItems(filteredJobs, sortKey, sortOrder) {
    
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
    filteredJobs = _.sortBy(filteredJobs, job => {
      if (job.items && job.items[0]) {
        return job.items[0][morphedSortKey];
      } else {
        return 0;
      }
    });
    return filteredJobs;
  }
  
  export function applyActiveFilters(filteredJobs, activeFilters) {
    filteredJobs.forEach(job => {
      job.items = job.items.filter(item => {
        for (let activeFilterKey of Object.keys(activeFilters)) {
          if (activeFilters[activeFilterKey].length == 0) {
            return true;
          }
          if (activeFilters[activeFilterKey].includes(item[activeFilterKey])) {
            return true;
          }
        }
        return false;
      });
    });
    return filteredJobs;
  }
  