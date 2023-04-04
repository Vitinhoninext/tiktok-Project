
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDP50Bnl4HvEhGhUT1Big-_Yn-U1g9WjKY",
  authDomain: "projeto-tiktok-6d433.firebaseapp.com",
  projectId: "projeto-tiktok-6d433",
  storageBucket: "projeto-tiktok-6d433.appspot.com",
  messagingSenderId: "107424482076",
  appId: "1:107424482076:web:1e423448748a6394ad70d9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;