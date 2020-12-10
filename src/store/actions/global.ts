import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions(
  {
    updateStates: ['payload'],
  },
  { prefix: 'global/' }
)

export { Types, Creators }