import firebase from 'firebase/app';
import 'firebase/auth';

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
export { fire };
