//Components
import JobItem from './JobItem';

//Assets
import ArrowUpIcon from '../../assets/icons/arrow-up.svg';
import ArrowDownIcon from '../../assets/icons/arrow-down.svg';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../../redux/actions/sort';

//Constants
import { sortOptions } from './constants/sortOptions';

const JobList = ({ data, totalJobs }) => {
    //Redux
    const dispatch = useDispatch();
    const selectedSort = useSelector(state => state.sort.selectedSort);
    const sortOption = useSelector(state => state.sort.sortOption);

    //Functions
    const handleSortClick = (optionIndex) => {
        if (optionIndex == selectedSort) {
            if (sortOption === 'neutral') {
                dispatch(setSort(optionIndex, 'asc'));
            }
            else if (sortOption === 'asc') {
                dispatch(setSort(optionIndex, 'desc'));
            }
            else if (sortOption === 'desc') {
                dispatch(setSort(null, 'neutral'));
            }
            else {
                console.log('Something went wrong with selecting the sort option.');
            }
        }
        else {
            dispatch(setSort(optionIndex, 'asc'));
        }
    }

    return (
        <div className={'flex flex-col w-full pt-8 pb-6 pl-6 pr-6 bg-white-500 shadow-sm rounded-sm'}>
            <div className={'flex justify-between mb-12 sm:flex-col sm:space-y-4'}>
                <p>
                    <span className={'font-bold'}>{totalJobs}</span>
                    <span className={'font-light'}> job postings</span>
                </p>
                <div className={'flex space-x-4 sm:flex-col sm:space-x-2 sm:space-y-2'}>
                    <p className={'font-light text-gray-400'}>Sort by</p>
                    <ul className={'flex space-x-3 sm:flex-col sm:space-x-0 sm:space-y-1'}>
                        {sortOptions && sortOptions.length > 0 ?
                            sortOptions.map((item, index) => (
                                <li
                                    key={`sort_option_${index}`}
                                    className={'cursor-pointer'}
                                    onClick={() => handleSortClick(index)}
                                >
                                    <div className={'flex space-x-1'}>
                                        <p className={`${selectedSort == index ? 'font-bold' : 'font-light'}`}>{item}</p>
                                        {selectedSort == index && sortOption == 'asc' ?
                                            <ArrowUpIcon />
                                            : selectedSort == index && sortOption == 'desc' ?
                                                <ArrowDownIcon />
                                                : false
                                        }
                                    </div>
                                </li>
                            ))
                            : false
                        }
                    </ul>
                </div>
            </div >
            { data && data.length > 0 ?
                data.map((item, index) =>
                    <JobItem
                        key={`job_item_${index}`}
                        jobData={item}
                    />
                )
                : false
            }
        </div >
    )
}

export default JobList;