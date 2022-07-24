// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKf1bzLN3h7IfXe_wGGv-RgV49WkXa8U0",
    authDomain: "ema-john-simple-10c68.firebaseapp.com",
    projectId: "ema-john-simple-10c68",
    storageBucket: "ema-john-simple-10c68.appspot.com",
    messagingSenderId: "172772615208",
    appId: "1:172772615208:web:aecf1093a296468235811d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;