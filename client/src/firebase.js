// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9b9d9.firebaseapp.com",
  projectId: "mern-blog-9b9d9",
  storageBucket: "mern-blog-9b9d9.appspot.com",
  messagingSenderId: "209649774278",
  appId: "1:209649774278:web:3c7864880ae9b13383f1c7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);