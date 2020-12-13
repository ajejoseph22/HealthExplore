import { useState } from 'react'

const Job = props => {
  const { job } = props;
  const [jobOpen, setJobOpen] = useState(false);
  const [contentItem, setContentItem] = useState(null);

  return (
    <li className="mt-5">
      {/* Title Bar */}
      <div className="w-full space-x-4 flex cursor-pointer" onClick={() => setJobOpen(!jobOpen)}>
        <div className="flex bg-gray-500 w-8 h-8 items-center justify-center rounded">
          <p className="uppercase text-white text-sm">
            {job.name.substr(0, 2)}
          </p>
        </div>
        <p className="text-gray-500">
          { job.total_jobs_in_hospital + ' jobs for ' + job.name }
        </p>
      </div>

      {/* Content Bar */}
      { jobOpen && <ul className="w-full mt-3 flex flex-col">
        { job.items.map( (element, i) => {
          return (
            <li key={i} className="cursor-pointer p-4 flex flex-col border-t-2" onClick={()=> setContentItem(prevItem => prevItem == i ? null : i)}>
              <div className="flex justify-between w-full">
                <div className="flex flex-col">
                  <h4 className="font-bold">{element.job_title}</h4>
                  <span> 
                    { element.job_type + ' | ' + '$' + element.salary_range[0] + ' ~ $' + element.salary_range[1] + ' an hour | ' + element.city }
                  </span>
                </div>
                <p className="text-gray-600 text-base">2 weeks ago</p>
              </div>
              { (contentItem === i) && 
                <div className="flex lg:flex-row flex-col py-4 w-full px-2 md:px-4 rounded shadow mt-2">
                  <div className="flex flex-col lg:w-2/3 items-start">
                    <div className="flex flex-row flex-wrap mb-4 w-full items-start">
                      <h4 className="font-semibold w-full md:w-1/2">Department:</h4>
                      <p className="w-full md:w-1/2 text-sm">
                        {element.department.map(item => { return item + ', ' })}
                      </p>
                    </div>
                    <div className="flex flex-row flex-wrap mb-4 w-full items-start">
                      <h4 className="font-semibold w-full md:w-1/2">Hours / Shifts:</h4>
                      <p className="w-full md:w-1/2 text-sm">
                        { element.hours[0] + ' hours / ' + element.work_schedule }
                      </p>
                    </div>
                    <div className="flex flex-row flex-wrap mb-4 w-full items-start">
                      <h4 className="font-semibold w-full md:w-1/2">Summary:</h4>
                      <p className="w-full md:w-1/2 text-sm">
                        {element.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col lg:items-end items-start lg:w-1/3 lg:space-y-2 space-x-2">
                    <button className="bg-blue-500 px-2 py-1 rounded-lg"><span className="text-white text-sm">Job Details</span></button>
                    <button className="border border-blue-500 py-1 px-2 rounded-lg"><span className="text-sm text-blue-400">Save Job</span></button>
                  </div>
                </div>
                }                            
              </li>
            )
          })}
        </ul>}            
      </li>
    )
}

export default Job;