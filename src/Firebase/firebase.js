// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa4Ja_DYY-KCS9BeNg4Y9DjWRw1VuDFaM",
  authDomain: "mybook-f058c.firebaseapp.com",
  databaseURL: "https://mybook-f058c-default-rtdb.firebaseio.com",
  projectId: "mybook-f058c",
  storageBucket: "mybook-f058c.appspot.com",
  messagingSenderId: "245500511083",
  appId: "1:245500511083:web:2c42ccfe127f7a3988022e",
  measurementId: "G-LX26W8PHPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);