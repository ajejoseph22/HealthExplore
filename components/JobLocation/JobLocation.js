function JobLocation({jobLocation}){
  return(
    <p><b>{jobLocation.total_jobs_in_hospital}</b> jobs for {jobLocation.name}</p>
  )
}

export default JobLocation;
