// import firebase from "firebase";
// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyAd_EXSox2oRgp3sd0tvlD5guynU-bxJWk",
//     authDomain: "facebook-massenger-clone-184b2.firebaseapp.com",
//     projectId: "facebook-massenger-clone-184b2",
//     storageBucket: "facebook-massenger-clone-184b2.appspot.com",
//     messagingSenderId: "884113744136",
//     appId: "1:884113744136:web:d5bbc5bd8b635b88c60cbd",
//     measurementId: "G-9L3SMLHH6E" 
// });


// const db = firebaseApp.firestore();

// export default db;

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAd_EXSox2oRgp3sd0tvlD5guynU-bxJWk",
    authDomain: "facebook-massenger-clone-184b2.firebaseapp.com",
    projectId: "facebook-massenger-clone-184b2",
    storageBucket: "facebook-massenger-clone-184b2.appspot.com",
    messagingSenderId: "884113744136",
    appId: "1:884113744136:web:d5bbc5bd8b635b88c60cbd",
    measurementId: "G-9L3SMLHH6E"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db 