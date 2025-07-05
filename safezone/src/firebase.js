// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2ccp9O2Fjlk4O2wPvJbUpeQhAX0YEz8E",
  authDomain: "safezone-a5107.firebaseapp.com",
  projectId: "safezone-a5107",
  storageBucket: "safezone-a5107.firebasestorage.app",
  messagingSenderId: "691401127895",
  appId: "1:691401127895:web:b81ccdfeda77aace7bbd92"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// Other classes can now use this instance of the Firestore database