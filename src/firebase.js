// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX_OC3JMWG87UYvl1yTvlYTpA2mcqqyn4",
  authDomain: "react-notes-68d71.firebaseapp.com",
  projectId: "react-notes-68d71",
  storageBucket: "react-notes-68d71.appspot.com",
  messagingSenderId: "998118049834",
  appId: "1:998118049834:web:a7a49166112143150bdb53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
