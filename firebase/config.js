import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID
// }

const firebaseConfig = {
  apiKey: "AIzaSyCsFoBTkWDYzfjH3x66vKxUanmw1Cb0R3Q",
  authDomain: "todo-assignment-d7d31.firebaseapp.com",
  projectId: "todo-assignment-d7d31",
  storageBucket: "todo-assignment-d7d31.appspot.com",
  messagingSenderId: "987718591972",
  appId: "1:987718591972:web:03e77c1d4b074662eb93f1"
};

//init firebase
initializeApp(firebaseConfig)

//init firestore
const db = getFirestore()

//init firebase auth
const auth = getAuth()

export { db, auth }
