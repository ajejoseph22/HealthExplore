import { createReducer } from 'reduxsauce'
import { success, failure } from '#/utils/actions'
import { Types } from '#/store/actions/jobs'

export const initialState = {
  status: {}
}

export const commonSuccess = (state, action) => {
  return {
    ...state,
    ...action.payload
  }
}

const handlers = {
  [Types.UPDATE_STATES]: commonSuccess,
}

export default createReducer(initialState, handlers)
