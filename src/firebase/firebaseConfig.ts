import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyCBLpMDX2Nq4jOp16ts0iC5Tp5UQEK-PVE",
    authDomain: "invoice-653d8.firebaseapp.com",
    databaseURL:
    "https://invoice-653d8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "invoice-653d8",
    storageBucket: "invoice-653d8.appspot.com",
    messagingSenderId: "104242305089",
    appId: "1:104242305089:web:4be6bc012d7246235c0ec0"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const realDB = getDatabase(app);