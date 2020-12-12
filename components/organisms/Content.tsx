import { IMainProps, SORT_OPTIONS } from "../../types";
import JobsGroup from "./JobsGroup";


const SortLink = ({ children, ...props }) => {
  return (
    <a className='text-sm mx-2 cursor-pointer hover:text-blue-500' {...props}>
      {children}
    </a>
  )
}
const Content = ({
  jobs
}: Pick<IMainProps, 'jobs'>) => {
  return (
    <div className='flex flex-col bg-white flex-grow py-5 mx-3'>
      <div className='flex justify-between'>
        <div className='flex'>
          <p className='font-semibold ml-5'>{jobs.reduce((acc, cur) => cur.total_jobs_in_hospital + acc, 0)}</p>
          <p className='ml-2 text-gray-500 text-sm italic'>job postings</p>
        </div>
        <div className='flex'>
          <p className='text-gray-500 text-sm mx-2'>Sort by</p>
          <SortLink data-sort-option={SORT_OPTIONS.LOCATION}>Location</SortLink>
          <SortLink data-sort-option={SORT_OPTIONS.ROLE}>Role</SortLink>
          <SortLink data-sort-option={SORT_OPTIONS.DEPARTMENT}>Department</SortLink>
          <SortLink data-sort-option={SORT_OPTIONS.EDUCATION}>Education</SortLink>
          <SortLink data-sort-option={SORT_OPTIONS.EXPERIENCE}>Experience</SortLink>
        </div>
      </div>
      <ul className='mt-5 divide-y divide-gray-200 divide-opacity-80'>
        {jobs.map((job, i) => <JobsGroup key={i} {...job}/>)}
      </ul>
    </div>
  )
}

export default Content;