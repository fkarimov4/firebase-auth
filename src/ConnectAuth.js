// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFaj5XwlErrpDFH_Hnv06wvbiGWKicYU4",
  authDomain: "fir-auth-fk.firebaseapp.com",
  projectId: "fir-auth-fk",
  storageBucket: "fir-auth-fk.appspot.com",
  messagingSenderId: "157554725186",
  appId: "1:157554725186:web:8733b8d20d29ee89aff8db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);