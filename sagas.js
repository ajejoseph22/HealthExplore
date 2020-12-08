import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'


import { setJobs, setJobsLoading } from './actions';

function* fetchJobsWithFilter(action) {
    try {
        const activeFilters = yield select(state => state.ui.activeFilters);
        const sortingModifiers = yield select(state => state.ui.queryModifiers);
        console.log(activeFilters, sortingModifiers);
        yield put(setJobsLoading(true));
        let result = yield call(fetch, '/api/jobs');
        result = yield result.json();
        yield put(setJobs(result.jobs));
        yield(put(setJobsLoading(false)));
    } catch(e) {
        // set error here.
        yield(put(setJobsLoading(false)));
    }
}

export default function* clipboardHealthSaga() {
    yield takeLatest('jobs/search', fetchJobsWithFilter);
}