import { useState } from "react";
import { IJobsProps } from "../types";
import IndividualJob from './IndividualJob';

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
  items, name
}: IJobsProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <li className='flex flex-col'>
      <div className='flex px-5 py-3 items-center cursor-pointer hover:bg-blue-100' onClick={() => setIsOpen(!isOpen)}>
        <IconBuilder name={name}/>
        <p className='ml-4 text-sm text-gray-700'>{items.length} jobs for {name}</p>
      </div>
      {isOpen && <ul className='divide-y-2 divide-gray-400 divide-opacity-20'>
        {items.map((item, i) => <IndividualJob key={i} {...item} />)}
      </ul>}
    </li>
  )
}

export default JobsGroup;