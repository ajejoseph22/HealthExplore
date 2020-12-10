import { createReducer } from 'reduxsauce'
import { success } from '#/utils/actions'
import { Types } from '#/store/actions/jobs'

export const initialState: Test.JobsState = {
  keyword: '',
  availableFilters: {},
  selectedFilters: {},
  jobs: [],
  sort: {}
}

export const commonSuccess = (state, action) => {
  return {
    ...state,
    ...action.payload
  }
}

export const setFilter = (state, action) => {
  const { filter, key, on } = action

  return {
    ...state,
    selectedFilters: {
      ...state.selectedFilters,
      [filter]: on
        ? [...(state.selectedFilters[filter] || []), key]
        : state.selectedFilters[filter].filter((e) => e !== key)
    }
  }
}

export const setSort = (state, action) => {
  const { option, value } = action

  return {
    ...state,
    sort: {
      ...state.sort,
      [option]: value
    }
  }
}

const handlers = {
  [Types.UPDATE_STATES]: commonSuccess,
  [success(Types.GET_FILTERS)]: commonSuccess,
  [success(Types.GET_JOBS)]: commonSuccess,
  [Types.SET_FILTER]: setFilter,
  [Types.SET_SORT]: setSort
}

export default createReducer(initialState, handlers)
