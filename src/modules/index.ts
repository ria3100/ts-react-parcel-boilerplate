import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import todoReducer from './todo'

const reducers = {
  todo: todoReducer,
}

export default ((initialState = {}) => {
  const rootReducer = combineReducers(reducers)
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(promise, logger)
  )
})()
