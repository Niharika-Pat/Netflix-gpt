// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkUFFZBfav3_w6XkWVEsAG5OtDOQdkC3U",
  authDomain: "netflixgpt-7263f.firebaseapp.com",
  projectId: "netflixgpt-7263f",
  storageBucket: "netflixgpt-7263f.firebasestorage.app",
  messagingSenderId: "116547683842",
  appId: "1:116547683842:web:3df76178d4035a216cc91b",
  measurementId: "G-BT6LL674MH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
