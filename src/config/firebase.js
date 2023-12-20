import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCQBTXm1iw3o3M6c0phfYskSRVtloRm0Is",
    authDomain: "proyectoreactbecchi.firebaseapp.com",
    projectId: "proyectoreactbecchi",
    storageBucket: "proyectoreactbecchi.appspot.com",
    messagingSenderId: "13297402743",
    appId: "1:13297402743:web:d6e5cec8df448de6c31772"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();