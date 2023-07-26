// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQcScA8bK96BoRQrbBDKXzNkiiyBMwPTc",
  authDomain: "todo-react-9aceb.firebaseapp.com",
  projectId: "todo-react-9aceb",
  storageBucket: "todo-react-9aceb.appspot.com",
  messagingSenderId: "407363149990",
  appId: "1:407363149990:web:6f38bd8cb5318f0cb5d467",
  measurementId: "G-LTBR2GZHD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);