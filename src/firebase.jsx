// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTkvb6KNunRteUslEDDT3pBVm2PsyFEaM",
    authDomain: "utorial-blog.firebaseapp.com",
    projectId: "utorial-blog",
    storageBucket: "utorial-blog.appspot.com",
    messagingSenderId: "1083202727777",
    appId: "1:1083202727777:web:75ea2473b208f95ed3df20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };