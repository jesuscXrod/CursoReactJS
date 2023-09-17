// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ_0Gv_dpHyZNb-HL_LQmFrsL2g-ZWaGY",
  authDomain: "ecommerce-jesus.firebaseapp.com",
  projectId: "ecommerce-jesus",
  storageBucket: "ecommerce-jesus.appspot.com",
  messagingSenderId: "505768740930",
  appId: "1:505768740930:web:0dbff43c31222bffbac5db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);