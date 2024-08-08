// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrTf8XnRAZk2Talv53FFqHmH0mlpwYzQk",
  authDomain: "inventory-managment-ec8a6.firebaseapp.com",
  projectId: "inventory-managment-ec8a6",
  storageBucket: "inventory-managment-ec8a6.appspot.com",
  messagingSenderId: "254101276832",
  appId: "1:254101276832:web:59b642a15ed56c7227e1c5",
  measurementId: "G-4VDVK76SVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export{firestore};