// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQBZEyEayrpEphsWJVQuR84Ts9YVF8E2Q",
  authDomain: "ema-john-simple-120d5.firebaseapp.com",
  projectId: "ema-john-simple-120d5",
  storageBucket: "ema-john-simple-120d5.appspot.com",
  messagingSenderId: "349044582857",
  appId: "1:349044582857:web:495bb0d7c8706598726018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;