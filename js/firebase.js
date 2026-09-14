import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
    getAuth
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD0RyvKG7uMljSfvjFbS-4pJiJyteXuPtU",
    authDomain: "si7a-cbf87.firebaseapp.com",
    projectId: "si7a-cbf87",
    storageBucket: "si7a-cbf87.firebasestorage.app",
    messagingSenderId: "25334714522",
    appId: "1:25334714522:web:4f0e914b55fb5e539c8f23"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {
    app,
    auth,
    db
};
