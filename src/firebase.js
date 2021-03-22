import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDeMnmiKaQezxDhjYu_8XoM4ueyQz8U2Eg",
    authDomain: "slack-clone-401ae.firebaseapp.com",
    projectId: "slack-clone-401ae",
    storageBucket: "slack-clone-401ae.appspot.com",
    messagingSenderId: "1047461778362",
    appId: "1:1047461778362:web:ab3f4e199371e196748383"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  
  export { auth, provider }
  export default db