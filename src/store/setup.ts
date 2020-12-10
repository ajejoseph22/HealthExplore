import { compose, createStore, applyMiddleware, Store } from 'redux'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'
import createSagaMiddleware, { Task } from 'redux-saga'
import reducer from './reducers'
import sagas from './sagas'

export interface SagaStore extends Store {
  sagaTask?: Task
}

export const makeStore: MakeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware()

  // 2: Add an extra parameter for applying middleware:
  const middlewares = [sagaMiddleware]
  // redux devtool extension
  const composeEnhancers =
    typeof window === 'undefined' || process.env.NODE_ENV === 'production'
      ? compose
      : (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(...middlewares))
  )

  // 3: Run your sagas on server
  sagas.forEach((saga) => sagaMiddleware.run(saga))

  // 4: now return the store:
  return store
}

export const wrapper = createWrapper(makeStore)
