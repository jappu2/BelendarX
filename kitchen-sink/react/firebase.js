// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDjmPOXeRbNyC05R9d2m1szmSJ1x_DAR0",
    authDomain: "belendarx.firebaseapp.com",
    projectId: "belendarx",
    storageBucket: "belendarx.appspot.com",
    messagingSenderId: "97224499986",
    appId: "1:97224499986:web:2f04399410fae368d7c9cb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
