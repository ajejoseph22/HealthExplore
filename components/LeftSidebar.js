import { useSelector, useDispatch } from 'react-redux';

import FilterBlock from './FilterBlock';
export default function LeftSidebar() {
    const filters = useSelector(state => state.filters);
    const filterNames = Object.keys(filters);
    // dispatch an action when a click happens.
    return <>
        {
            filterNames.map(filter => (
                <FilterBlock key={filter} filterObject={{
                    name: filter,
                    items: filters[filter]
                }} />
            ))
        }
    </>;
};