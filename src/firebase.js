import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage,} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_7x3dn8rOg_HXz9QtIncqComSrHOkPMs",
  authDomain: "devchat-7ad6b.firebaseapp.com",
  projectId: "devchat-7ad6b",
  storageBucket: "devchat-7ad6b.appspot.com",
  messagingSenderId: "1090075513713",
  appId: "1:1090075513713:web:d548e0f82c4309ed66dcd0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
