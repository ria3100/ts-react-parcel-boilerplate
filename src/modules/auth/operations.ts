import actions from './actions'

const signupWithEmailAndPassword = actions.signupWithEmailAndPassword
// const handleSignUp = actions.handleSignUp
const loginWithEmailAndPassword = actions.loginWithEmailAndPassword
const loginWithGoogle = actions.loginWithGoogle
const loginWithFacebook = actions.loginWithFacebook
const loginWithTwitter = actions.loginWithTwitter
const setCurrentUserData = actions.setCurrentUserData
const logoutUser = actions.logoutUser
const setUserData = actions.setUserData

export default {
  signupWithEmailAndPassword,
  // handleSignUp,
  loginWithEmailAndPassword,
  loginWithGoogle,
  loginWithFacebook,
  loginWithTwitter,
  setCurrentUserData,
  logoutUser,
  setUserData,
}
