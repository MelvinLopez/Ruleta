import firebase from 'firebase/app';
import '@firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDkYeqMNJ5Nt0s1zl7R42fGXXfRRygeO1I",
    authDomain: "ruleta-b10b2.firebaseapp.com",
    projectId: "ruleta-b10b2",
    storageBucket: "ruleta-b10b2.appspot.com",
    messagingSenderId: "766656088386",
    appId: "1:766656088386:web:e8be38d4b626b55b04e0db"
};

firebase.initializeApp(firebaseConfig);
export const base = firebase.firestore().settings({ experimentalForceLongPolling: false, merge: true });
// export const base = firebase.firestore();
// console.log("🚀 ~ file: firebaseConfig.js ~ line 17 ~ base", base)
// const base = firebaseApp.firestore();
export const auth = firebase.auth();

// export {base, auth};



// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const base = firebaseApp.firestore().settings({ experimentalForceLongPolling: true, merge: true });
// console.log("🚀 ~ file: firebaseConfig.js ~ line 17 ~ base", base)
// // const base = firebaseApp.firestore();
// export const auth = firebase.auth();

// // export {base, auth};