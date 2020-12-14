import React, {useState, useEffect, useContext} from 'react';
import SearchContext from '../../context/SearchContext';
import JobContext from '../../context/JobContext';
import FiltersContext from '../../context/FiltersContext';
import JobDetails1 from '../../components/JobDetails1/index';
import JobList from '../../components/JobList/index';
import Filters from '../../components/Filters/index';

function encodeData(data) {
  return Object.keys(data).filter(key=>data[key]!=null && data[key]!=undefined && data[key]!='').map(function(key) {
      return [key, data[key]].map(encodeURIComponent).join("=");
  }).join("&");
}

function unPackFilters(filters){
  let result = {};
  for (let i = 0; i < filters.length; i++) {
    result = {...result, ...filters[i]}
  }
  return result;
}

function createFilters(filters){
  console.log(filters);
  return Object.keys(filters).filter(key=>filters[key]!=null && filters[key]!=undefined && filters[key]!='').map(function(key) {
    return encodeURIComponent(filters[key]);
  }).join(",");
}

function JobBoard(){
  const searchContext = useContext(SearchContext);
  const filtersContext = useContext(FiltersContext);
  const jobContext = useContext(JobContext);
  const [url, setUrl] = useState(getUrl());
  const {jobs, setJobs} = jobContext;

  const jobCount = jobs.reduce((a, b) => {
    return a + b.total_jobs_in_hospital
  }, 0);

  function getUrl(){
    // for now we use a single item in the filtersContext.filters array context
    // but we could easily extend it and add more filters
    // should make "encodeData" to work with an array of objects instead of a single object

    const querystring = encodeData({q:searchContext.query,sort:createFilters(filtersContext.filters)});
    return `/api/jobs${querystring ? '?' + querystring:''}`;
  }
  async function getJobs(){
    try{
      let response = await fetch(url, {cache: "no-store"});
      let data = await response.json();
      setJobs(data);
    }catch(e){
      console.error(e);
    }
  }

  useEffect(()=>{
    setUrl(getUrl())
  },[searchContext.query, filtersContext.filters])

  useEffect(()=>{
    getJobs();
  },[url])

  useEffect(()=>{
    console.log("hibs",jobs)
  },[jobs])
  return(
    <div style={{ backgroundColor:'white'}} className="container p-2 mx-auto">

      <Filters jobs={jobs}/>
      {jobs.map((job, i)=>{
        return <React.Fragment key={job.name}><Job job={job}/></React.Fragment>
      })}
    </div>
  )
}

function Job({job}){
  const [jobListShown, setJobListShown] = useState(false);

  function handleClick(){
    setJobListShown(!jobListShown);
  }

  return(
    <div>
      <div className="mt-2 flex items-center">
        <p className="p-2 bg-gray-300 rounded-lg w-10 flex items-center 
        justify-center text-gray-100 font-bold mr-5">{job.name.substring(0,2).toUpperCase()}</p>
        <p onClick={handleClick} className="p-1 cursor-pointer"><b>{job.total_jobs_in_hospital}</b> jobs for {job.name}</p>
      </div>
      {jobListShown?<JobList jobList={job.items}/>:null}
    </div>
  )
}

export default JobBoard;
