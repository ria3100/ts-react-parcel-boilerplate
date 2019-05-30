import { combineReducers } from 'redux'
import CONSTANTS from './constants'
import types from './types'

const userData = (state = null, action) => {
  switch (action.type) {
    case types.SET_USERDATA:
      return action.user
    default:
      return state
  }
}

const reducer = combineReducers({
  userData,
})

export default reducer
