// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4yH3Dpw-C2Hposl4U0n11MfIK1GzgE9s",
  authDomain: "coder-react-88190.firebaseapp.com",
  projectId: "coder-react-88190",
  storageBucket: "coder-react-88190.firebasestorage.app",
  messagingSenderId: "110140780635",
  appId: "1:110140780635:web:f553a6dbd4a35247fe0f7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);