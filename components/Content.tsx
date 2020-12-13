import { IHomeState, SORT_OPTIONS } from "../types";
import JobsGroup from "./JobsGroup";
import SkeletonLoader from "./SkeletonLoader";


const SortOption = ({ children, className='', ...props }) => {
  return (
    <p className={'text-sm mx-2 h-5 cursor-pointer hover:text-blue-500 '+className} {...props}>
      {children}
    </p>
  )
}
const Content = ({
  jobs, sortOptions, isLoading
}: Pick<IHomeState, 'jobs' | 'sortOptions' | 'isLoading'>) => {
  return (
    <div className='flex flex-col bg-white flex-grow py-5 sm:mx-3 sm:mt-5'>
      <div className='flex justify-between'>
        <div className='flex'>
          <p className='font-semibold ml-5'>{jobs.reduce((acc, cur) => cur.items.length + acc, 0)}</p>
          <p className='ml-2 text-gray-500 text-sm italic'>job postings</p>
        </div>
        <div className='hidden sm:flex'>
          <p className='text-gray-500 text-sm mx-2'>Sort by</p>
          <SortOption
            data-sort-option={SORT_OPTIONS.LOCATION}
            className={sortOptions[SORT_OPTIONS.LOCATION] !== null ? 'text-blue-600' : ''}
          >Location
            <span className='w-6 block text-gray-600 text-xs mt-auto'>{sortOptions[SORT_OPTIONS.LOCATION]}</span>
          </SortOption>
          <SortOption
            data-sort-option={SORT_OPTIONS.ROLE}
            className={sortOptions[SORT_OPTIONS.ROLE] !== null ? 'text-blue-600' : ''}
          >Role
            <span className='w-6 block text-gray-600 text-xs mt-auto'>{sortOptions[SORT_OPTIONS.ROLE]}</span>
          </SortOption>
          <SortOption
            data-sort-option={SORT_OPTIONS.DEPARTMENT}
            className={sortOptions[SORT_OPTIONS.DEPARTMENT] !== null ? 'text-blue-600' : ''}
          >Department
            <span className='w-6 block text-gray-600 text-xs mt-auto'>{sortOptions[SORT_OPTIONS.DEPARTMENT]}</span>
          </SortOption>
          <SortOption
            data-sort-option={SORT_OPTIONS.EDUCATION}
            className={sortOptions[SORT_OPTIONS.EDUCATION] !== null ? 'text-blue-600' : ''}
          >Education
            <span className='w-6 block text-gray-600 text-xs mt-auto'>{sortOptions[SORT_OPTIONS.EDUCATION]}</span>
          </SortOption>
          <SortOption
            data-sort-option={SORT_OPTIONS.EXPERIENCE}
            className={sortOptions[SORT_OPTIONS.EXPERIENCE] !== null ? 'text-blue-600' : ''}
          >Experience
            <span className='w-6 block text-gray-600 text-xs mt-auto'>{sortOptions[SORT_OPTIONS.EXPERIENCE]}</span>
          </SortOption>
        </div>
      </div>
      <ul className='mt-5 divide-y divide-gray-200 divide-opacity-80'>
        {isLoading ? <div className='flex flex-col w-full'>
          {[0,1,2,3,4,5,6,7,8].map((i) => <SkeletonLoader key={i}/>)}
        </div> : jobs.map((job, i) => <JobsGroup key={i} {...job}/>)}
      </ul>
    </div>
  )
}

export default Content;