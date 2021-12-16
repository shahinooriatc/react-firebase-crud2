// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDd0zN6tXrSDUYFulIpaaU1CmEqvUGRa14",
  authDomain: "reactfirebasecrud-c0bce.firebaseapp.com",
  projectId: "reactfirebasecrud-c0bce",
  storageBucket: "reactfirebasecrud-c0bce.appspot.com",
  messagingSenderId: "628633585396",
  appId: "1:628633585396:web:25bfd5ee47718fc39d00a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)