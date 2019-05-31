import { combineReducers } from 'redux'
import CONSTANTS from './constants'
import types from './types'

const initalState = {
  userData: null,
}

const userData = (state = initalState.userData, action) => {
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
