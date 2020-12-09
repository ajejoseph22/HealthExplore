import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'


import { setJobs, setJobsLoading } from './actions';
import { server } from './config';

function* fetchJobsWithFilter(action) {
    try {
        const activeFilters = yield select(state => state.ui.activeFilters);
        const sortingModifiers = yield select(state => state.ui.queryModifiers);
        const searchKeyword = yield select(state => state.ui.searchText);
        // console.log('inside saga', activeFilters, sortingModifiers);
        yield put(setJobsLoading(true));
        let result = yield call(fetch, `${server}/api/jobs?search=${searchKeyword}`, {
            method: "get",
            headers: {
                'active_filters': JSON.stringify(activeFilters),
                'sorting_modifiers': JSON.stringify(sortingModifiers)
            }
        });
        result = yield result.json();
        yield put(setJobs(result.jobs));
        yield(put(setJobsLoading(false)));
    } catch(e) {
        // set error here.
        console.log(e);
        yield(put(setJobsLoading(false)));
    }
}

export default function* clipboardHealthSaga() {
    yield takeLatest('jobs/search', fetchJobsWithFilter);
}