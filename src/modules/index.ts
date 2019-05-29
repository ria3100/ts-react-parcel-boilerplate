import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'

import todoReducer from './todo'
import AuthReducer from './auth'

const reducers = {
  todo: todoReducer,
  auth: AuthReducer,
}

export default ((initialState = {}) => {
  const rootReducer = combineReducers(reducers)
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger))
})()
