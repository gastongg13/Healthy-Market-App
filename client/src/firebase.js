import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCm_pfc9WZYcUJ-hkxc9mhUK0NknqzLEqM",
  authDomain: "healthy-market-app.firebaseapp.com",
  projectId: "healthy-market-app",
  storageBucket: "healthy-market-app.appspot.com",
  messagingSenderId: "718987146091",
  appId: "1:718987146091:web:05f4604fd333e6316a922e",
  measurementId: "G-RN1HC5RBZ9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Get a list of cities from your database
export { auth, provider };
