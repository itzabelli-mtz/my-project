import firebase from 'firebase/app'
 
const firebaseConfig = {
  apiKey: "AIzaSyB9e_eMDD-r6Zs9JW3wT5gjqh_XMVOsfp4",
  authDomain: "my-project-38116.firebaseapp.com",
  projectId: "my-project-38116",
  storageBucket: "my-project-38116.appspot.com",
  messagingSenderId: "201112194856",
  appId: "1:201112194856:web:2b7e2a08a84371105d8a1d"
}

export const firebaseapp = firebase.initializeApp(firebaseConfig)