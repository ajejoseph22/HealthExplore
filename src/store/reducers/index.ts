import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import global from './global'
import jobs from './jobs'

const reducer = combineReducers({
  global,
  jobs
})

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    }
  } else {
    return reducer(state, action)
  }
}

export default rootReducer
