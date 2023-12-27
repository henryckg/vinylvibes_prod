import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC_vc2qmy-AbxpYtSk66-pM05kLtofhk9w",
    authDomain: "vinyl-vibes-64895.firebaseapp.com",
    projectId: "vinyl-vibes-64895",
    storageBucket: "vinyl-vibes-64895.appspot.com",
    messagingSenderId: "222936162457",
    appId: "1:222936162457:web:fd5894a33f9a1935f7d808",
    measurementId: "G-L3V6HXSGXZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()