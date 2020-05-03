import firebase from '@firebase/app';
import '@firebase/firestore'

const initializeFirebase = () => {
  try {
    const config = {
      "apiKey": process.env.FIREBASE_API_KEY,
      "authDomain": process.env.FIREBASE_AUTH_DOMAIN,
      "databaseURL": process.env.FIREBASE_DB_URL,
      "projectId": process.env.FIREBASE_PROJECT_ID,
      "storageBucket": process.env.FIREBASE_STORAGE_BUCKET,
      "messagingSenderId": process.env.FIREBASE_MSG_SENDER_ID,
      "appId": process.env.FIREBASE_APP_ID
    };
    firebase.initializeApp(config);
  } catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack);
    }
  }
  return firebase.firestore();
}

export default initializeFirebase;