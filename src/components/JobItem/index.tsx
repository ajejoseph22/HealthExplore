import { useState } from 'react'
import Modal from 'react-modal'
import JobItemDetail from '#/components/JobItemDetail'
import type { JobItemProps } from './types'

const customModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

export const JobItem: React.FC<JobItemProps> = ({ item }) => {
  const [expanded, setExpanded] = useState(false)
  const [isDetailShown, showDetail] = useState(false)

  function toggleDetailModal() {
    showDetail(!isDetailShown)
  }

  return (
    <div className='py-2 border-b text-sm'>
      <div
        className='cursor-pointer text-gray-800'
        onClick={() => setExpanded(!expanded)}
      >
        <div className='font-bold'>{item.job_title}</div>
        <div>
          {item.job_type} | ${item.salary_range[0]} - ${item.salary_range[1]} |{' '}
          {item.city}
        </div>
      </div>
      {expanded && (
        <div className='my-3 flex flex-col sm:flex-row'>
          <div className='grid sm:grid-cols-3 gap-2'>
            <div className='font-bold'>Department:</div>
            <div className='sm:col-span-2'>{item.department.join(', ')}</div>
            <div className='font-bold'>Hours / shifts</div>
            <div className='sm:col-span-2'>
              {item.hours.join(', ')} / {item.work_schedule}
            </div>
            <div className='description'>Summary</div>
            <div className='sm:col-span-2'>{item.description}</div>
          </div>
          <div className='px-3 flex flex-row sm:flex-col justify-center text-xs sm:w-30 flex-shrink-0'>
            <button
              className='px-4 py-2 m-2 uppercase rounded-md bg-blue-500 text-white hover:text-opacity-80'
              onClick={toggleDetailModal}
            >
              Job details
            </button>
            <button className='px-4 py-2 m-2 border border-blue-500 uppercase rounded-md text-blue-500 hover:text-opacity-80'>
              Save job
            </button>
          </div>
        </div>
      )}
      {isDetailShown && (
        <Modal
          style={customModalStyle}
          isOpen={isDetailShown}
          onRequestClose={toggleDetailModal}
        >
          <JobItemDetail item={item} />
        </Modal>
      )}
    </div>
  )
}

export default JobItem