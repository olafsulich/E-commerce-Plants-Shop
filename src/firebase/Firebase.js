import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAaJviMlMtL1oYaiz9Yf4eqwlSa6HJqay4',
  authDomain: 'plantsapp-a8e32.firebaseapp.com',
  databaseURL: 'https://plantsapp-a8e32.firebaseio.com',
  projectId: 'plantsapp-a8e32',
  storageBucket: 'plantsapp-a8e32.appspot.com',
  messagingSenderId: '637201907072',
  appId: '1:637201907072:web:24657924b38ae060ba1565',
  measurementId: 'G-W55W2L5235',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
