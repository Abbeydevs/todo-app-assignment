import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCsFoBTkWDYzfjH3x66vKxUanmw1Cb0R3Q",
    authDomain: "todo-assignment-d7d31.firebaseapp.com",
    projectId: "todo-assignment-d7d31",
    storageBucket: "todo-assignment-d7d31.appspot.com",
    messagingSenderId: "987718591972",
    appId: "1:987718591972:web:03e77c1d4b074662eb93f1"
  };


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
