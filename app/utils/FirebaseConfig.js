import { initializeApp } from "firebase/app";
import {getFirestore, doc, setDoc} from "firebase/firestore";


export const loadFirebaseConfiguration =()=>{
    const app = initializeApp(firebaseConfig);
    global.dbCon = getFirestore();
}

const firebaseConfig = {
    apiKey: "AIzaSyBINwQeKI-JE8CgA1kKknDYV78AXLYG9d0",
    authDomain: "calificaciones-873b6.firebaseapp.com",
    projectId: "calificaciones-873b6",
    storageBucket: "calificaciones-873b6.appspot.com",
    messagingSenderId: "238932371126",
    appId: "1:238932371126:web:356d9f50a7de1d08bba817"
};