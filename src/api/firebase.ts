// src/api/firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
   apiKey:"AIzaSyAUijbPnGkOxG48hwfXbc5jFwfHgKsCtXM",
   authDomain:"churnguard-69f0f.firebaseapp.com",
   projectId:"churnguard-69f0f",
   storageBucket:"churnguard-69f0f.firebasestorage.app",
   messagingSenderId: "830889557179",
   appId:"1:830889557179:web:798a4871ab0b4bc4627d9e",

};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export default app;
