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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;
}

// Use this function to upload our collections data to firebase (to use in App.js)
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data(); // to pull off data from document use the data() method

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });
    
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    } , {});

}

// Promise method to use in user's sagas to check if a user is signed in
export const getCurrentUser = () => {
    return new Promise((resolve, reject) =>{
        const unsubcribe = auth.onAuthStateChanged(userAuth =>{
            unsubcribe();
            resolve(userAuth);
        }, reject);
    });
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Authentifacation with google account
export const goggleProvider = new firebase.auth.GoogleAuthProvider();
goggleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(goggleProvider);

export default firebase;