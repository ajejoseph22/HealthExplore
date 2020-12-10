import { useState } from 'react'
import JobItem from '#/components/JobItem'
import type { JobProps } from './types'

export const Job: React.FC<JobProps> = ({ job }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className='py-2'>
      <div
        className='cursor-pointer text-gray-500 flex items-center'
        onClick={() => setExpanded(!expanded)}
      >
        <div className='rounded p-1 bg-gray-400 text-white mr-3'>CA</div>
        <div>
          {job.total_jobs_in_hospital} jobs for {job.job_title}
        </div>
      </div>
      {expanded && job.items.length && (
        <div className='border-t mt-2'>
          {job.items.map((e, index) => (
            <JobItem key={index} item={e} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Job
