// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDQUgkFwZSvZRXiOsdDi-4hTHtZJ192ZrI',
  authDomain: 'plantshop-5afda.firebaseapp.com',
  databaseURL: 'https://plantshop-5afda.firebaseio.com',
  projectId: 'plantshop-5afda',
  storageBucket: 'plantshop-5afda.appspot.com',
  messagingSenderId: '430055733967',
  appId: '1:430055733967:web:33684546e53be3c18315ba',
};
const fire = firebase.initializeApp(config);
export default fire;

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData,
//       });
//     } catch (error) {
//       console.log('error creating user', error.message);
//     }
//   }

//   return userRef;
// };

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
