
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCLWoh9vkvqOiCqNUtim1Aw3KGF7tLKbo",
  authDomain: "flonestore-16379.firebaseapp.com",
  projectId: "flonestore-16379",
  storageBucket: "flonestore-16379.firebasestorage.app",
  messagingSenderId: "39506294279",
  appId: "1:39506294279:web:4ee7c5a88c78db71619ca2",
  measurementId: "G-XDQ6ED66N9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export initialized services
export const auth = getAuth(app);
export const db = getFirestore(app);
