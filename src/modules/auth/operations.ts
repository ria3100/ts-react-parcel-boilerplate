import actions from './actions'

const signupWithEmailAndPassword = actions.signupWithEmailAndPassword
// const handleSignUp = actions.handleSignUp
const loginWithEmailAndPassword = actions.loginWithEmailAndPassword
const loginWithGoogle = actions.loginWithGoogle
const loginWithFacebook = actions.loginWithFacebook
const loginWithTwitter = actions.loginWithTwitter
const setUserData = actions.setUserData

export default {
  signupWithEmailAndPassword,
  // handleSignUp,
  loginWithEmailAndPassword,
  loginWithGoogle,
  loginWithFacebook,
  loginWithTwitter,
  setUserData,
}
