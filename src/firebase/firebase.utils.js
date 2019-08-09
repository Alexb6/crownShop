import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDSUDEyEKTyKfc-t46wfWbYgdDHbRwgNXA",
    authDomain: "crown-db-2019-08.firebaseapp.com",
    databaseURL: "https://crown-db-2019-08.firebaseio.com",
    projectId: "crown-db-2019-08",
    storageBucket: "",
    messagingSenderId: "626812577235",
    appId: "1:626812577235:web:c826eab9df5684f7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Authentifacation with google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;