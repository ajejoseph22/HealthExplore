import { useState } from "react";
import { IIndividualJobProps } from "../types";

const IndividualJob = ({
  department, description, hours,
  work_schedule: workSchedule, job_type: jobType,
  job_title: jobTitle,
  salary_range: salaryRange, city
}: IIndividualJobProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className='flex flex-col' onClick={() => setIsOpen(!isOpen)}>
      <div className={`flex justify-between px-5 py-3 ${isOpen ? '' : 'cursor-pointer hover:bg-blue-100'}`}>
        <div className='flex flex-col'>
          <p className='text-sm text-gray-900 font-bold'>
            {jobTitle}
          </p>
          <p className='text-sm text-gray-600'>{`${jobType} | $${salaryRange[0]} - ${salaryRange[1]} an hour | ${city}`}</p>
        </div>
        <p className='text-sm text-gray-600'></p>
      </div>
      {isOpen &&
        <div className='flex flex-col px-5 py-3'>
          <div className='grid grid-cols-5 py-2'>
            <p className='col-span-2 text-sm text-gray-900 font-bold'>
              Department:
            </p>
            <p className='col-span-2 text-sm text-gray-700'>
              {department.join(', ')}
            </p>
          </div>
          <div className='grid grid-cols-5 py-2'>
            <p className='col-span-2 text-sm text-gray-900 font-bold'>
              Hours / shifts:
            </p>
            <p className='col-span-2 text-sm text-gray-700'>
              {`${hours[0]} hours / ${workSchedule}`}
            </p>
          </div>
          <div className='grid grid-cols-5 py-2'>
            <p className='col-span-2 text-sm text-gray-900 font-bold'>
              Summary:
            </p>
            <p className='col-span-2 text-sm text-gray-700'>
              {description}
            </p>
            <div className='flex flex-col items-center'>
              <button className='bg-blue-500 p-2 m-2 text-white rounded-lg w-max'>Job details</button>
              <button className='text-blue-500 p-2 m-2 border-blue-500 border-2 w-max rounded-lg'>Save job</button>
            </div>
          </div>
        </div>
      }
    </li>
  )
}

export default IndividualJob;