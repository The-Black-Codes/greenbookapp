// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// Firebase APIkey information
const firebaseConfig = {
  apiKey: "AIzaSyCLPIIcjqCgw7bdhM6Hp3WoOjop7ilb7kA",
  authDomain: "vocal-invention-362104.firebaseapp.com",
  databaseURL: "https://vocal-invention-362104-default-rtdb.firebaseio.com",
  projectId: "vocal-invention-362104",
  storageBucket: "vocal-invention-362104.appspot.com",
  messagingSenderId: "921954288474",
  appId: "1:921954288474:web:24b69309a6c61f76216963",
  measurementId: "G-2ZSN5JDETQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Enables authentication
export const auth = getAuth(app);

// Enables SignInWithGoogle Functionality
export const googleProvider = new GoogleAuthProvider();

// Firestore Database
export const db = getFirestore(app);

