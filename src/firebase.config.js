import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'XXXXX',
  authDomain: 'XXXXX',
  databaseURL: 'XXXXX',
  projectId: 'XXXXX',
  storageBucket: 'XXXXX',
  messagingSenderId: 'XXXXX',
  appId: 'XXXXX',
})

export const providerGoogle = new firebase.auth.GoogleAuthProvider()
export const providerFacebook = new firebase.auth.FacebookAuthProvider()
export const providerTwitter = new firebase.auth.TwitterAuthProvider()
export const db = firebase.firestore()
export default firebase
