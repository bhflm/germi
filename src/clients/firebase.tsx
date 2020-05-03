import firebase from '@firebase/app';
import '@firebase/firestore'
import { firebaseConfig } from '../config';

if (!firebase.apps.length) {
    console.log('FIREBASE CONFIG: ', firebaseConfig);
    firebase.initializeApp(firebaseConfig)
};

const db = firebase.firestore();
export default db;