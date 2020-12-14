import React from 'react';
import JobDetails1 from '../JobDetails1/index';

function JobList({jobList}){
  return(
    jobList.map(job=>{
      return(
        <React.Fragment key={job.id}>
          <JobDetails1 job={job}/>
        </React.Fragment>
      )
    })
  )
}

export default JobList;
