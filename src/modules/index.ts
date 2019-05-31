import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import AuthReducer from './auth'

const reducers = {
  auth: AuthReducer,
}

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: ['todos'],
  // blacklist: ['visibilityFilter'],
}

const store = ((initialState = {}) => {
  const rootReducer = combineReducers(reducers)
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  return createStore(
    persistedReducer,
    initialState,
    applyMiddleware(thunk, logger)
  )
})()

export const persistor = persistStore(store)
export default store
