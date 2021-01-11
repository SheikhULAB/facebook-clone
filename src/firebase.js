import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC593u80gfqG0alM5idixZemUlGrWmz0xs",
    authDomain: "facebook-clone-b25b7.firebaseapp.com",
    projectId: "facebook-clone-b25b7",
    storageBucket: "facebook-clone-b25b7.appspot.com",
    messagingSenderId: "841385819200",
    appId: "1:841385819200:web:96de627c192440e784f3a5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;