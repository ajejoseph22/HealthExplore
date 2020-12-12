//React
import { useState } from 'react';

//Typography
import Heading from '../typography/Heading';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, clearFilter } from '../../redux/actions/filter';

const FilterCard = ({ title, data }) => {
    //Redux
    const dispatch = useDispatch();
    const filterIndex = useSelector(state => state.filter.filterIndex);
    const filter = useSelector(state => state.filter.filter);

    //State
    const [limit, setLimit] = useState(10);

    //Functions
    const increaseLimit = () => {
        setLimit(limit + 10);
    }

    const selectFilter = (indx, filt) => {
        if (filterIndex == getFilterType(indx) && filter == filt) {
            dispatch(clearFilter());
        }
        else {
            const filtIndx = getFilterType(indx);
            dispatch(setFilter(filtIndx, filt));
        }
    }

    const getFilterType = (title) => {
        return title.replace(' ', '_');
    }

    return (
        <div className={'bg-white-500 w-full p-4 shadow-sm rounded-sm'}>
            <Heading>{title.toUpperCase()}</Heading>
            <div className={'mt-4'}>
                {data && data.length > 0 ?
                    data.slice(0, limit).map((item) => (
                        <div
                            key={`item_${item.key}_${Math.random()}`}
                            className={'flex text-sm cursor-pointer items-end'}
                            onClick={() => selectFilter(title, item.key)}
                        >
                            <p className={`duration-200 ${filterIndex == getFilterType(title) && filter == item.key ? 'text-blue-500' : 'text-gray-400 hover:text-blue-300'}`}>{item.key}</p>
                            <p className={'ml-2 text-gray-400'}>{item.doc_count}</p>
                        </div>
                    ))
                    : false
                }
                {data && data.length > 10 && data.length > limit ?
                    <button onClick={() => increaseLimit()} className={'text-blue-500 pt-4'}>
                        <p>Show more</p>
                    </button>
                    : false
                }
            </div>
        </div>
    )
}

export default FilterCard;