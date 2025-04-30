import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc_sQfJMrHqPw1VJVdTgOo7BZiRDWPvHI",
  authDomain: "complaint-system-e3549.firebaseapp.com",
  projectId: "complaint-system-e3549",
  storageBucket: "complaint-system-e3549.firebasestorage.app",
  messagingSenderId: "557302107872",
  appId: "1:557302107872:web:6699e719a65c37aa88ca85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
