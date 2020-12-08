
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchText, searchJobsWithFilter, searchForJobsUsingSagas } from '../actions';
import _ from 'lodash';

export default function Search() {
    const searchText = useSelector(state => state.ui.searchText);
    const dispatch = useDispatch();
    function onChangeSearchText(e) {
        dispatch(setSearchText(e.target.value));
    }

    function onKeyDown(e) {
        if (e.key == 'Enter') {
            // do API call
            // dispatch(searchJobsWithFilter());
            dispatch(searchForJobsUsingSagas());
        }
    }

    return <>
        Search: <input type="text" value={searchText} onChange={onChangeSearchText} onKeyDown={onKeyDown} placeholder={'search for any job, title, keywords or company'}></input>
    </>
};