import firebase from "./firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

var firebaseDevConfig = {
  apiKey: "AIzaSyBTpoAkyPDlTqWKDaCi0FKGrKR5WVaIq80",
  authDomain: "tpeo-learning-platform-de.firebaseapp.com",
  projectId: "tpeo-learning-platform-de",
  storageBucket: "tpeo-learning-platform-de.appspot.com",
  messagingSenderId: "741637589817",
  appId: "1:741637589817:web:dd3f97ee927ee9382936e8",
  measurementId: "G-GH1RNEJL75",
};

const app = initializeApp(firebaseDevConfig);

export const db = getFirestore(app);
export default firebase;
