// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)



// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyB8ymqmv42tQUi5o538KMsYf_Gg7O7-KMU",
//   authDomain: "yumito-e6155.firebaseapp.com",
//   projectId: "yumito-e6155",
//   storageBucket: "yumito-e6155.appspot.com",
//   messagingSenderId: "765858403311",
//   appId: "1:765858403311:web:bfd37b513ac0100dab9c1a",
//   measurementId: "G-PN2LMWFZKZ"
// };
//   // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);