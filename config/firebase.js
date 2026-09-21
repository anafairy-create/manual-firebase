import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2ySDysR8nsWqTp2fNmkoRJ3mcOdGG77g",
  authDomain: "loginaulafirebase.firebaseapp.com",
  projectId: "loginaulafirebase",
  storageBucket: "loginaulafirebase.firebasestorage.app",
  messagingSenderId: "95316779729",
  appId: "1:95316779729:web:24113f8a70eea35bacdbf0",
  measurementId: "G-T01WSPWXVN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
