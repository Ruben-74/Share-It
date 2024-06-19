
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwANorj0nnQ_qNooznLaSFxx3Fss0FVKs",
    authDomain: "shareit-af561.firebaseapp.com",
    projectId: "shareit-af561",
    storageBucket: "shareit-af561.appspot.com",
    messagingSenderId: "705520074663",
    appId: "1:705520074663:web:77813e0c88292ef2cf4082"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//Initialise SDK authentification
export const auth = getAuth(app);
//Initialize base de donnée
export const db = getFirestore(app);