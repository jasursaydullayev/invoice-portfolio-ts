import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCBLpMDX2Nq4jOp16ts0iC5Tp5UQEK-PVE",
    authDomain: "invoice-653d8.firebaseapp.com",
    projectId: "invoice-653d8",
    storageBucket: "invoice-653d8.appspot.com",
    messagingSenderId: "104242305089",
    appId: "1:104242305089:web:4be6bc012d7246235c0ec0"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)