// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKXDsTvVPy0fFMICGMQh-zg12jbmuKBiE",
  authDomain: "thebookhavenbysaima.firebaseapp.com",
  projectId: "thebookhavenbysaima",
  storageBucket: "thebookhavenbysaima.firebasestorage.app",
  messagingSenderId: "128319761365",
  appId: "1:128319761365:web:c75207d5805b4e3a07eb5c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
