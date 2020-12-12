//React
import { useState } from 'react';

//Components
import HospitalAvatar from './HospitalAvatar';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

//Modules
import moment from 'moment';

const JobItem = ({ jobData }) => {
    //State
    const [showPositions, setShowPositions] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);

    //Functions
    const openJobDetails = (jobIndex) => {
        if (selectedJob == jobIndex) {
            setSelectedJob(null);
            setShowDetails(false);
        }
        else {
            setSelectedJob(jobIndex);
            setShowDetails(true);
        }
    }

    return (
        <>
            <button
                className={'flex items-center justify-start mt-4'}
                onClick={() => setShowPositions(!showPositions)}
            >
                <HospitalAvatar name={jobData.name} />
                <p className={'text-gray-600 ml-4'}>
                    {jobData.total_jobs_in_hospital} jobs for {jobData.name}
                </p>
            </button>

            {jobData.items && jobData.items.length > 0 ?
                jobData.items.map((item, index) => (
                    <div key={`job_data_${index}`}>
                        <div
                            className={`${showPositions ? 'flex' : 'hidden'} flex-col mt-4 justify-center border-t border-grey-300 cursor-pointer`}
                            onClick={() => openJobDetails(index)}
                        >
                            <p className={'mt-4 font-bold'}>{item.job_title}</p>
                            <p className={'font-light'}>{item.job_type} | ${item.salary_range[0]} - ${item.salary_range[1]} per hour | {item.city}</p>
                        </div>
                        <div className={`${showPositions && index == selectedJob && showDetails ? 'flex' : 'hidden'} flex-col w-full mt-4`}>
                            <div className={`w-full flex justify-between sm:flex-col-reverse`}>
                                <div className={'flex w-4/5 sm:flex-col'}>
                                    <div className={'w-full'}>
                                        <p className={'mt-4 font-bold'}>Department:</p>
                                    </div>
                                    <div className={'w-full'}>
                                        <p className={'mt-4'}>{item.department.join()}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className={'mt-4'}>{moment(item.created).fromNow()}</p>
                                </div>
                            </div>
                            <div className={`w-full flex justify-between sm:flex-col`}>
                                <div className={'flex w-4/5 sm:flex-col'}>
                                    <div className={'w-full'}>
                                        <p className={'mt-4 font-bold'}>Hours / shifts:</p>
                                    </div>
                                    <div className={'w-full'}>
                                        <p className={'mt-4'}>{item.hours.join()} hours / {item.work_schedule}</p>
                                    </div>
                                </div>
                                <div className={'mt-4'}>
                                    <PrimaryButton title={'Job Details'} />
                                </div>
                            </div>
                            <div className={`w-full flex justify-between sm:flex-col`}>
                                <div className={'flex w-4/5 sm:flex-col'}>
                                    <div className={'w-full'}>
                                        <p className={'mt-4 font-bold'}>Summary:</p>
                                    </div>
                                    <div className={'w-full'}>
                                        <p className={'mt-4'}>{item.description}</p>
                                    </div>
                                </div>

                                <div className={'mt-4'}>
                                    <SecondaryButton title={'Save Job'} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                : false
            }
        </>
    )
}

export default JobItem;