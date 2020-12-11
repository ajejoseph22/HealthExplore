//React
import { useState } from 'react';

//Typography
import Heading from '../typography/Heading';

const FilterCard = ({ title, data }) => {
    //State
    const [limit, setLimit] = useState(10);

    //Functions
    const increaseLimit = () => {
        setLimit(limit + 10);
    }

    return (
        <div className={'bg-white-500 w-full p-4 shadow-sm rounded-sm'}>
            <Heading>{title.toUpperCase()}</Heading>
            <div className={'mt-4'}>
                {data && data.length > 0 ?
                    data.slice(0, limit).map((item) => (
                        <div key={`item_${item.key}_${Math.random()}`} className={'flex text-sm cursor-pointer items-end'}>
                            <p>{item.key}</p>
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