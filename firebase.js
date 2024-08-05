// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUMzhlUSjL3IeYBViCAaru0wBQxdUO3UQ",
  authDomain: "inventory-tracker-c057b.firebaseapp.com",
  projectId: "inventory-tracker-c057b",
  storageBucket: "inventory-tracker-c057b.appspot.com",
  messagingSenderId: "1017462941565",
  appId: "1:1017462941565:web:d66dd197ac001b1a88ce14",
  measurementId: "G-LBS895GJ6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };