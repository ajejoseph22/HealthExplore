import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects'
import * as services from '#/services/jobs'
import { failureCreator, requestCreator, successCreator } from '#/utils/actions'
import { Types } from '../actions/jobs'

function* getFilters(action) {
  try {
    yield put(requestCreator(action.type, {}))

    const res = yield call(services.getFilters)
    yield put(successCreator(action.type, { availableFilters: res }))
  } catch (err) {
    yield put(failureCreator(action.type, { err }))
  }
}

function* getJobs(action) {
  try {
    yield put(requestCreator(action.type, {}))
    const { sort, selectedFilters: filter } = yield select(
      (state: Test.StoreState) => state.jobs
    )
    const res = yield call(services.getJobs, {
      sort,
      filter
    })
    yield put(successCreator(action.type, { jobs: res }))
  } catch (err) {
    yield put(failureCreator(action.type, { err }))
  }
}

export default function* sagas() {
  yield all([
    takeLatest(Types.GET_FILTERS, getFilters),
    takeLatest(Types.GET_JOBS, getJobs)
  ])
}
