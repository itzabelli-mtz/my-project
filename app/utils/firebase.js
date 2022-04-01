import firebase from 'firebase'
 
const firebaseConfig = {
    apiKey: "AIzaSyCHRMbk5CS6dgdnKG5Pd3TMlHnUmRG173A",
    authDomain: "nuevo-mtz.firebaseapp.com",
    projectId: "nuevo-mtz",
    storageBucket: "nuevo-mtz.appspot.com",
    messagingSenderId: "1033476844088",
    appId: "1:1033476844088:web:86269e5a6e5c9beed954cd"
  }

export const firebaseapp = firebase.initializeApp(firebaseConfig)