import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Initialize Firebase
/* Se ponene los datos de firebase al generar la nueva base de datos */
const firebaseConfig = {};

export const FIREBASE_APP = initializeApp(firebaseConfig);
//export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

const app = initializeApp(firebaseConfig);
