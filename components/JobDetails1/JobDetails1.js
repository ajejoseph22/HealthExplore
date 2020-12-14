import {useState, useEffect} from 'react';
import JobDetails2 from '../JobDetails2/index';

function JobDetails1({job}){
  const [detailsShown, setDetailsShown] = useState(false);

  function handleClick(){
    setDetailsShown(!detailsShown);
  }

  return(
    <div onClick={handleClick} className="pt-4 pb-4 mt-2 mb-2 cursor-pointer" style={{borderTop:'1px solid #ececec'}}>
      <p className="font-bold">{job.job_title}</p>
      <div className="flex flex-row">
        <span className="flex-1">{job.job_type} | ${job.salary_range[0]} - ${job.salary_range[1]} an hour | {job.city}</span>
        <span className="mr-5">{timeSince(new Date(job.created))} ago</span>
      </div>
      {detailsShown?<JobDetails2 job={job}/>:null}
      
    </div>
  )
}

function timeSince(date) {

  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}


export default JobDetails1;
