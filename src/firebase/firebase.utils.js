import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB6jFkBc5RZPtX9PDzkbastUhtLIHWRkc4',
  authDomain: 'crwn-rzvgib.firebaseapp.com',
  databaseURL: 'https://crwn-rzvgib.firebaseio.com',
  projectId: 'crwn-rzvgib',
  storageBucket: '',
  messagingSenderId: '950641682731',
  appId: '1:950641682731:web:f374d6322e08231f'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    // Create new user
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(error.message);
    }
  } else {
    // Update user
    const lastLoggedIn = new Date();

    try {
      await userRef.update({
        lastLoggedIn
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
