import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDeqzoX30u4fr67HW8zg3jmrZWdJPfr7wo",
    authDomain: "jwl-clothing-7441d.firebaseapp.com",
    databaseURL: "https://jwl-clothing-7441d.firebaseio.com",
    projectId: "jwl-clothing-7441d",
    storageBucket: "jwl-clothing-7441d.appspot.com",
    messagingSenderId: "449302056254",
    appId: "1:449302056254:web:21037c34ffa0eb8185f06f",
    measurementId: "G-3SPMX57P1W"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
