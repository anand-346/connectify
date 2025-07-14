import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxONNXydaDn9t4KgoXzsOb8mF0xpvsUhs",
  authDomain: "connectify-web-bad14.firebaseapp.com",
  projectId: "connectify-web-bad14",
  storageBucket: "connectify-web-bad14.firebasestorage.app",
  messagingSenderId: "317374467613",
  appId: "1:317374467613:web:1f9b070dbd3f8f7d8fc0f4",
  measurementId: "G-GY38424D9L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { 
  auth, 
  googleProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword 
};