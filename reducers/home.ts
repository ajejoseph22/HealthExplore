import { IHomeState, IHomeActionTypes, IHomeReducerActionType, IHomeProps } from "../types";

export const INITIAL_STATE: IHomeState = {
  jobs: [],
  isLoading: false,
  isError: false,
  sortOptions: {
    location: null,
    role: null,
    department: null,
    education: null,
    experience: null,
  },
  filters: {
    job_type: [],
    department: [],
    experience: [],
    work_schedule: [],
  },
  searchText: '',
}

export const initialStateWithServerData = (serverData: IHomeProps) => {
  return {
    ...INITIAL_STATE,
    ...serverData
  }
}


const reducer = (state: IHomeState, action: IHomeReducerActionType) => {
  switch(action.type) {
    case IHomeActionTypes.TOGGLE_SORT_OPTION: {
      const prevOption = state.sortOptions[action.payload.option];
      console.log(action.payload.option)
      return {
        ...state,
        sortOptions: {
          ...state.sortOptions,
          [action.payload.option]: prevOption === null ? 'asc' : (prevOption === 'asc' ? 'desc' : null)
        },
        isLoading: true,
        isError: false
      }
    } case IHomeActionTypes.TOGGLE_FILTER_OPTION: {
      const { payload: { filterType, filterKey } } = action;
      return {
        ...state,
        filters: {
          ...state.filters,
          [filterType]: state.filters[filterType].map((filter) => {
            if(filter.key === filterKey) {
              filter.active = !filter.active
            }
            return filter;
          })
        },
        isLoading: true,
        isError: false,
      }
    } case IHomeActionTypes.SEARCH_QUERY_CHANGE: {
      return {
        ...state,
        searchText: action.payload.searchText,
        isLoading: true,
        isError: false,
      }
    } case IHomeActionTypes.LOADING_DONE: {
      return {
        ...state,
        jobs: action.payload.data,
        isLoading: false,
        isError: false,
      }
    } case IHomeActionTypes.LOADING_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;