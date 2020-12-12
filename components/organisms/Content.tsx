import { IMainProps } from "../../types";
import JobsGroup from "./JobsGroup";


const SortLink = ({ children }) => {
  return (
    <p className='text-sm mx-2'>
      {children}
    </p>
  )
}
const Content = ({
  jobs
}: Pick<IMainProps, 'jobs'>) => {
  return (
    <div className='flex flex-col bg-white mt-3 flex-grow py-5'>
      <div className='flex justify-between'>
        <div className='flex'>
          <p className='font-semibold ml-5'>{jobs.reduce((acc, cur) => cur.total_jobs_in_hospital + acc, 0)}</p>
          <p className='ml-2 text-gray-500 text-sm italic'>job postings</p>
        </div>
        <div className='flex'>
          <p className='text-gray-500 text-sm mx-2'>Sort by</p>
          <SortLink>Location</SortLink>
          <SortLink>Role</SortLink>
          <SortLink>Department</SortLink>
          <SortLink>Education</SortLink>
          <SortLink>Experience</SortLink>
        </div>
      </div>
      <ul className='mt-5 divide-y divide-gray-200 divide-opacity-80'>
        {jobs.map((job) => <JobsGroup {...job}/>)}
      </ul>
    </div>
  )
}

export default Content;