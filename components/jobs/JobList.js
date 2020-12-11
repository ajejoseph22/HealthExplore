//Components
import JobItem from './JobItem';

const JobList = ({ data }) => {
    return (
        <div className={'flex flex-col w-full pt-8 pb-6 pl-6 pr-6 bg-white-500 shadow-sm rounded-sm'}>
            {data && data.length > 0 ?
                data.map((item, index) => (
                    <JobItem
                        key={`job_item_${index}`}
                        jobData={item}
                    />
                ))
                : false
            }
        </div>
    )
}

export default JobList;