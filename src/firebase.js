import firebase from "firebase";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseDevConfig = {
  apiKey: "AIzaSyCA52LGn5sVno9yCi3bFKoR-PaEPvgboYk",
  authDomain: "thinkery-eaaa9.firebaseapp.com",
  projectId: "thinkery-eaaa9",
  storageBucket: "thinkery-eaaa9.appspot.com",
  messagingSenderId: "408681156474",
  appId: "1:408681156474:web:77a56c14920154900c10c3",
  measurementId: "G-ZZTDWB3YDB",
};

firebase.initializeApp(firebaseDevConfig);

// export const db = getFirestore(app);

export default firebase;
