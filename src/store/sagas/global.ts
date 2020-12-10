import { put, select, takeEvery } from 'redux-saga/effects'
import { Creators } from '#/store/actions/global'
import { originalType } from '#/utils/actions'

function * listenAction (action) {
  const state = yield select(state => state)

  const { status } = yield select(state => state.jobs)
  let newStatus
  if (action.type.endsWith('/request')) {
    newStatus = {
      ...status,
      [originalType(action.type)]: 'request'
    }
    yield put(Creators.updateStates({ status: newStatus }))
  } else if (action.type.endsWith('/success')) {
    newStatus = {
      ...status,
      [originalType(action.type)]: 'success'
    }
    yield put(Creators.updateStates({ status: newStatus }))
  } else if (action.type.endsWith('/failure')) {
    newStatus = {
      ...status,
      [originalType(action.type)]: 'failure'
    }
    yield put(Creators.updateStates({ status: newStatus }))
  }
}

export default function * sagas () {
  yield takeEvery('*', listenAction)
}
