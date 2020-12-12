import { IJobsProps } from "../../types";

const IconBuilder = ({ name }: { name: IJobsProps['name'] }) => {
  const splitName = name.split(' ');
  // Ignoring more than 2 words in a name.
  const [first, last] = splitName;
  return (
    <span className='rounded-md bg-gray-500 text-white p-2 font-bold text-center tracking-widest'>
      {`${first[0]}${last ? last[0] : ''}`}
    </span>
  )
}
const JobsGroup = ({
  total_jobs_in_hospital: totalJobs,
  items, job_title: jobTitle, name
}: IJobsProps) => {
  return (
    <li className='flex px-5 py-3 items-center cursor-pointer hover:bg-blue-100'>
      <IconBuilder name={name}/>
      <p className='ml-4 text-sm text-gray-700'>{totalJobs} jobs for {name}</p>
    </li>
  )
}

export default JobsGroup;