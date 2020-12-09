import { server } from './config';

export const setFilters = filters => ({
    type: 'filters/set',
    filters
});

export const setActiveFilter = (filterKey, filterValue) => {
    return async (dispatch) => {
        dispatch({
            type: 'filters/setActiveFilter',
            filterKey,
            filterValue
        });
        dispatch(searchForJobsUsingSagas());
    }
}

export const setQueryModifiers = (modifierKey, modifierValue) => {
    return async(dispatch) => {
        dispatch({
            type: 'queryModifiers/setQueryModifier',
            modifierKey,
            modifierValue
        });
        dispatch(searchForJobsUsingSagas());
    };
}

export const setSearchText = searchText => ({
    type: 'search/setSearchText',
    searchText
});

export const clearSearch = () => setSearchText('');

export const setJobs = jobs => ({
    type: 'jobs/set',
    jobs
});

export const setJobsLoading = isLoading => ({
    type: 'jobs/loading',
    isLoading
});

export const searchForJobsUsingSagas = () => ({
    type: 'jobs/search'
});

export const searchJobsWithFilter = () => {
    return async (dispatch, getState) => {
        dispatch(setJobsLoading(false));
        const activeFilters = getState().ui.activeFilters;
        console.log(activeFilters);
        const sortingModifiers = getState().ui.queryModifiers;
        console.log(sortingModifiers);
        let result = await fetch(`${server}/api/jobs`);
        result = await result.json();
        console.log(result);
        dispatch(setJobsLoading(result));
        // do network call to fetch all 
        dispatch(setJobsLoading(false));
    };
};