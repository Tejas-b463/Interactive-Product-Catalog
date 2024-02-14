// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDc5EsCBu4jTLF4AmA30zCg0vE_uWa63nk",
    authDomain: "product-catalog-db189.firebaseapp.com",
    projectId: "product-catalog-db189",
    storageBucket: "product-catalog-db189.appspot.com",
    messagingSenderId: "736362864442",
    appId: "1:736362864442:web:580e79ab08f9f76f51fa03",
    measurementId: "G-MVHQ872JTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()