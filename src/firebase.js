import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAH0dt-EvWKlDy1HbuRxK4cfzTxOX1EgYo",
    authDomain: "dc--clone-26b3d.firebaseapp.com",
    projectId: "dc--clone-26b3d",
    storageBucket: "dc--clone-26b3d.appspot.com",
    messagingSenderId: "355104187762",
    appId: "1:355104187762:web:8e1da144457dbb95f9e9eb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { db, auth, provider }