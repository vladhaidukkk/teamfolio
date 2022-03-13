import { initializeApp } from 'firebase/app';
import configKeys from '../../config.json';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: configKeys.authDomain,
  databaseURL: configKeys.databaseURL,
  projectId: configKeys.projectId,
  storageBucket: configKeys.storageBucket,
  messagingSenderId: configKeys.messagingSenderId,
  appId: configKeys.appId,
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
