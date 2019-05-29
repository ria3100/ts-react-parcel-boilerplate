import types from './types'

import firebase, { providerTwitter } from '../../firebase.config.js'

export const handleSignUpEmail = (email, password) => {
  return async dispatch => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => dispatch(handleSignUp(result)))
      .catch(error => console.log(error))
  }
}

export const handleSignUp = text => ({
  type: types.SIGNUP,
  id: '',
  text,
})

export const loginWithTwitter = () => {
  return async dispatch => {
    await firebase.auth().signInWithRedirect(providerTwitter)
    await firebase
      .auth()
      .getRedirectResult()
      .then(result => dispatch(handleLogin(result)))
      .catch(error => console.log(error))
  }
}

export const handleLogin = (text: any) => ({
  type: types.LOGIN,
  id: '',
  text,
})

export default {
  handleSignUpEmail,
  handleSignUp,
  loginWithTwitter,
  handleLogin,
}
