
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDDJiIk8RY8Mn1rERilvce_osReIhS8p4g",
  authDomain: "tiktok---jornadadev1.firebaseapp.com",
  projectId: "tiktok---jornadadev1",
  storageBucket: "tiktok---jornadadev1.appspot.com",
  messagingSenderId: "881983567908",
  appId: "1:881983567908:web:0bf5764aad938745c3c0b1"
};


const app = initializeApp(firebaseConfig); 
const db = getFirestore(app);

export default db;