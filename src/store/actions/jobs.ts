import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    updateStates: ['payload'],
    getFilters: null,
    getJobs: null,
    setFilter: ['filter', 'key', 'on'],
    setSort: ['option', 'value']
  },
  { prefix: 'jobs/' }
)

export { Types, Creators }