import types from './types'

import firebase, {
  providerGoogle,
  providerFacebook,
  providerTwitter,
} from '../../firebase.config.js'

export const signupWithEmailAndPassword = (email, password) => {
  return async dispatch => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      // .then(result => dispatch(handleSignUp(result)))
      .catch(error => console.log(error))
  }
}

export const loginWithEmailAndPassword = (email, password) => {
  return async dispatch => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => console.log(error))
  }
}

export const loginWithGoogle = () => {
  return async dispatch => {
    await firebase
      .auth()
      .signInWithPopup(providerGoogle)
      .then(result => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
}

export const loginWithFacebook = () => {
  return async dispatch => {
    await firebase
      .auth()
      .signInWithPopup(providerFacebook)
      .then(result => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
}

export const loginWithTwitter = () => {
  return async dispatch => {
    await firebase
      .auth()
      .signInWithPopup(providerTwitter)
      .then(result => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
}

export const setUserData = (user: any) => {
  const { displayName, email, photoURL, emailVerified } = user
  return {
    type: types.SET_USERDATA,
    user: { displayName, email, photoURL, emailVerified },
  }
}

export default {
  signupWithEmailAndPassword,
  loginWithEmailAndPassword,
  loginWithGoogle,
  loginWithFacebook,
  loginWithTwitter,
  setUserData,
}
