import * as firebase from 'firebase';
import 'firebase/firestore'

const app = firebase.initializeApp( {
  apiKey: "AIzaSyAVqB3ZI14Gj6aAv7ecuiRwIYLKO3SmEa8",
  authDomain: "neem-24700.firebaseapp.com",
  projectId: "neem-24700",
  storageBucket: "neem-24700.appspot.com",
  messagingSenderId: "174769724683",
  appId: "1:174769724683:web:7e0f432ffe404b1fa5560e"
}
)
//initializing the firestore
export const fireDB = app.firestore()
export const auth = app.auth()
export default app;