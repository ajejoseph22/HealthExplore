function JobDetails2({job}){
  return(
    <div className="flex flex-row mt-5">
      <div className="flex flex-col flex-1">
        <div className="mt-2 flex flex-col md:flex-row">
          <span className="w-1/3 font-bold">
            Department:
          </span>
          <div className="flex-1">
            <span style={{maxWidth:400}}>
              {job.department.join(', ')}
            </span>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="mt-2 flex flex-col md:flex-row">
          <span className="w-1/3 font-bold">
            Hours / shifts:
          </span>
          <div className="flex-1">
            <span style={{maxWidth:400}}>
              {job.hours.join(', ')} hours / {job.work_schedule}
            </span>
          </div>
          <div className="flex-1"></div>
        </div>
        <div className="mt-2 flex flex-col md:flex-row">
          <span className="w-1/3 font-bold">
            Summary:
          </span>
          <div className="flex-1">
            <span style={{maxWidth:400}}>
              {job.description}
            </span>
          </div>
          <div className="flex flex-col flex-1 flex md:items-end">
            <div onClick={e=>e.stopPropagation()} role="button" 
            className="rounded-lg bg-blue-400 p-3 flex items-center justify-center">
              <span className="text-white font-bold">Job details</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default JobDetails2;
