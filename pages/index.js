import React, { useState, useEffect } from 'react';

import SearchBar from '../components/home/SearchBar';
import FilterBar from '../components/home/FilterBar';
import JobList from '../components/home/JobList';
import { getJobs } from '../api/RESTApi';

const Home = props => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState({
    searchKey: '',
    filters: {},
    sort: {
      title: 0,
      location: 0,
      experience: 0,
      date: 0
    }
  });

  const onChangeSearchKey = (newSearchKey) => {
    setFilter(prevFilter => ({...prevFilter, searchKey: newSearchKey}))
  };

  const onAddFilter = (key, value) => {
    let filters = filter.filters;
    if(filters[key] && filters[key].indexOf(value) != -1) {
      filters[key].splice(filters[key].indexOf(value), 1);
    }
    else {
      if(!filters[key] || key != 'department') filters[key] = [];
      filters[key].push(value);
    }
    setFilter(prevFilter => ({...prevFilter, filters: filters}))
  };

  const onChangeSort = (element) => {
    let sort = filter.sort;
    if(!sort[element]) sort[element] = 1;
    else if(sort[element] == -1) sort[element] = 0
    else sort[element] = -1;
    setFilter(prevFilter => ({...prevFilter, sort: sort}));
  };

  useEffect(() => {
    getJobs(filter).then(response => {
      setJobs(response.data)
    }).catch(error => {
      setJobs([]);
    });
  }, [filter]);

  return (
    <div className="p-5">
      <SearchBar changeSearchKey={onChangeSearchKey} searchKey={filter.searchKey} />
      <div className="flex mt-5 lg:space-x-4">
        <FilterBar filters={filter.filters} addFilter={onAddFilter} />
        <JobList jobs={jobs} sortItems={filter.sort} changeSort={onChangeSort} />
      </div>
    </div>
  )
}

export default Home;
