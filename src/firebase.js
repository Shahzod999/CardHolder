import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "cardholder-f0f3a.firebaseapp.com",
  projectId: "cardholder-f0f3a",
  storageBucket: "cardholder-f0f3a.appspot.com",
  messagingSenderId: "397034159823",
  appId: "1:397034159823:web:08b89179ffc1facbe9c1ba",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
