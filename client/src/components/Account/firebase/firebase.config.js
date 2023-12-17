// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlrgV_R7ZuFN8aVulIHM5mCDwxRpNAHaQ",
  authDomain: "hybrd-98014.firebaseapp.com",
  projectId: "hybrd-98014",
  storageBucket: "hybrd-98014.appspot.com",
  messagingSenderId: "973260897375",
  appId: "1:973260897375:web:bf951477ce7c766ba72fea",
  measurementId: "G-45YBD741XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)