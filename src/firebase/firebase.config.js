// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAxCqjbfXeKlLptLULyqaVEgkvxoKDFDw",
  authDomain: "firebse-auth-real-project.firebaseapp.com",
  projectId: "firebse-auth-real-project",
  storageBucket: "firebse-auth-real-project.appspot.com",
  messagingSenderId: "997840738200",
  appId: "1:997840738200:web:a2fd7aa89294c0f55bbded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;