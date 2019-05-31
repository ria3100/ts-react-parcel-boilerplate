import types from './types'

import firebase, {
  providerGoogle,
  providerFacebook,
  providerTwitter,
} from '../../firebase.config.js'

const signupWithEmailAndPassword = (name, email, password) => {
  return async dispatch => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        const user = firebase.auth().currentUser
        if (!user) return
        await user.updateProfile({ displayName: name }).then(() => {
          dispatch(setUserData(user))
        })
      })
      .catch(error => console.log(error))
  }
}

const loginWithEmailAndPassword = (email, password) => {
  return async dispatch => {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
}

const loginWithGoogle = () => {
  return async dispatch => {
    await firebase
      .auth()
      .signInWithPopup(providerGoogle)
      .then(() => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
}

const loginWithFacebook = () => {
  return async dispatch => {
    await firebase
      .auth()
      .signInWithPopup(providerFacebook)
      .then(() => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
}

const loginWithTwitter = () => {
  return async dispatch => {
    await firebase
      .auth()
      .signInWithPopup(providerTwitter)
      .then(() => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
}

const setCurrentUserData = () => {
  return async dispatch => {
    await firebase.auth().onAuthStateChanged(user => {
      if (!user) return
      dispatch(setUserData(firebase.auth().currentUser))
    })
  }
}

const logoutUser = () => {
  return async dispatch => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(setUserData(null))
      })
  }
}

const setUserData = (user: any) => {
  if (!user)
    return {
      type: types.SET_USERDATA,
      user: null,
    }

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
  setCurrentUserData,
  logoutUser,
  setUserData,
}
