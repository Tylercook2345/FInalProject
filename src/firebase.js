// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOylVu4t4BCCiN24sNb0FzRtkLKmbn5w4",
  authDomain: "tcs-tc-s.firebaseapp.com",
  projectId: "tcs-tc-s",
  storageBucket: "tcs-tc-s.appspot.com",
  messagingSenderId: "418418385750",
  appId: "1:418418385750:web:6c41e39114b65723af6cf7",
  measurementId: "G-6TJYQVQ4RN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const auth = getAuth(app);

export default app