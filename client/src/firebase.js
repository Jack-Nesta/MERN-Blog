// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-11c1b.firebaseapp.com",
  projectId: "mern-blog-11c1b",
  storageBucket: "mern-blog-11c1b.appspot.com",
  messagingSenderId: "490521079311",
  appId: "1:490521079311:web:aa3fbb3e6a1edab69c7d7a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
