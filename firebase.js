import {initializeApp, getApps, getApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBw-67dD2uaM7Cs3P8KT_KNzWO1muubcWc",
    authDomain: "visualization-4791f.firebaseapp.com",
    projectId: "visualization-4791f",
    storageBucket: "visualization-4791f.appspot.com",
    messagingSenderId: "563256321287",
    appId: "1:563256321287:web:aff7466bd7b1c2c34491a2",
    measurementId: "G-DHYHS5BZGB"
  };

const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

const db = getFirestore()

export {app, db}