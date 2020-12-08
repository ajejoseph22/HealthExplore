import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import projectReducer from './reducers';

import createSagaMiddleware from 'redux-saga';
import clipboardHealthSaga from './sagas';
import { create } from 'lodash';

const sagaMiddleware = createSagaMiddleware();

let store

const initialState = {
    filters: {},
    jobs: []
}


function initStore(preloadedState = initialState) {
  return createStore(
    projectReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...[thunk, sagaMiddleware]))
  )
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }
  sagaMiddleware.run(clipboardHealthSaga);

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}
