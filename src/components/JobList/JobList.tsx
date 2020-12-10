import cn from 'classnames'
import { useMemo } from 'react'
import Job from '#/components/Job'
import { SORT_OPTIONS } from '#/consts'
import type { JobListProps } from './types'

type SortButtonProps = {
  option: string
  state?: 'asc' | 'desc'
  onChange: (option: string, state?: 'asc' | 'desc') => void
}
const SortButton: React.FC<SortButtonProps> = ({ option, state, onChange }) => {
  function handleClick() {
    let newState: 'asc' | 'desc' | undefined = 'asc'
    if (state === 'asc') newState = 'desc'
    else if (state === 'desc') newState = undefined
    onChange(option, newState)
  }

  return (
    <div
      className='px-2 text-sm cursor-pointer hover:text-blue-60'
      onClick={handleClick}
    >
      {option}{state ? `(${state})` : null}
    </div>
  )
}

const JobList: React.FC<JobListProps> = ({ className, jobs, sort, setSort }) => {
  const totalJobsCount = useMemo(() => {
    return jobs.reduce((total, curr) => total + curr.total_jobs_in_hospital, 0)
  }, [jobs])

  return (
    <div className={cn('shadow-sm bg-white p-4', className)}>
      <div className='flex flex-col md:flex-row md:justify-between md:h-12'>
        <div>
          <span className='font-bold'>{totalJobsCount.toLocaleString()}</span>{' '}
          job postings
        </div>
        <div className='flex my-3 md:my-0'>
          {SORT_OPTIONS.map((e) => (
            <SortButton key={e} option={e} state={sort[e]} onChange={setSort} />
          ))}
        </div>
      </div>
      <div>
        {jobs.map((e, index) => (
          <Job key={index} job={e} />
        ))}
      </div>
    </div>
  )
}

export default JobList
