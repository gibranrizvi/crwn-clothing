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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
