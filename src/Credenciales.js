import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYicCUEfU7vpOr03wBp5P3bIwdZx6hlYg",
  authDomain: "login-1085f.firebaseapp.com",
  projectId: "login-1085f",
  storageBucket: "login-1085f.appspot.com",
  messagingSenderId: "499427107286",
  appId: "1:499427107286:web:2abbdd874f9e838099c477",
  measurementId: "G-B7RWDFHHRQ"
};


const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;