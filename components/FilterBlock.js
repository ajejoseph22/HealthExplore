import _ from 'lodash';

import { useDispatch, useSelector } from 'react-redux';
import { setActiveFilter } from '../actions';
import styles from '../styles/Commons.module.css';

export default function FilterBlock({ filterObject }) {
    const dispatch = useDispatch();
    const activeFilters = useSelector(state => state.ui.activeFilters);
    function setFilter(filterItem) {
        dispatch(setActiveFilter(filterObject.name, filterItem.key));
    }
    const filterItems = filterObject.items.map(filter => {
        let isActive = false;
        if (activeFilters[filterObject.name] && activeFilters[filterObject.name].includes(filter.key)) {
            isActive = true;
        }
        return <FilterItem key={filter.key} isActive={isActive} setFilter={setFilter} filterItem={filter} />
    });
    return <div className={`${styles.filterBlock} ${styles.boxShadow}`}>
        <span className={`${styles.filterBlockHeading}`}>{_.startCase(filterObject.name.replace('_', ' '))}</span>
        <ul>
            {filterItems}
        </ul>
        <br/>
    </div>
};

function FilterItem({ filterItem, isActive, setFilter }) {
    return <li style={{
        color: isActive ? 'blue' : ''
    }} className={styles.filterItem} onClick={e => setFilter(filterItem)}>{filterItem.key} ({filterItem.doc_count})</li>
}

function showMore({filterObject}) {
    
}