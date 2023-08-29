// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhw2DSEH13yUSiAHs0hDTD6HA0cQ1S0CQ",
  authDomain: "blogs-600be.firebaseapp.com",
  projectId: "blogs-600be",
  storageBucket: "blogs-600be.appspot.com",
  messagingSenderId: "550096088013",
  appId: "1:550096088013:web:11bcbcea0257f0507eb284"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);