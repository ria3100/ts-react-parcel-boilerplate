import types from './types'

import firebase, {
  providerGoogle,
  providerFacebook,
  providerTwitter,
} from '../../firebase.config.js'

const signupWithEmailAndPassword = (name, email, password) => (
  dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async () => {
        const user = firebase.auth().currentUser
        if (!user) return
        user.updateProfile({ displayName: name }).then(() => {
          dispatch(setUserData(user))
        })
      })
      .catch(error => console.log(error))
  }
)


const loginWithEmailAndPassword = (email, password) => (
  dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
)

const loginWithGoogle = () => (
  dispatch => {
    firebase
      .auth()
      .signInWithPopup(providerGoogle)
      .then(() => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
)

const loginWithFacebook = () => (
  dispatch => {
    firebase
      .auth()
      .signInWithPopup(providerFacebook)
      .then(() => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
)

const loginWithTwitter = () => (
  dispatch => {
    firebase
      .auth()
      .signInWithPopup(providerTwitter)
      .then(() => dispatch(setUserData(firebase.auth().currentUser)))
      .catch(error => console.log(error))
  }
)

const setCurrentUserData = () => (
  dispatch => {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) return
      dispatch(setUserData(firebase.auth().currentUser))
    })
  }
)

const logoutUser = () => (
  dispatch => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(setUserData(null))
      })
  }
)

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
