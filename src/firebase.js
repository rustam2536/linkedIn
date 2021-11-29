
  // Import the functions you need from the SDKs you need
import { firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxAy7ii1zLDvEE9gL1oqUQj0fXUWXiBCY",
  authDomain: "sajiay-82378.firebaseapp.com",
  projectId: "sajiay-82378",
  storageBucket: "sajiay-82378.appspot.com",
  messagingSenderId: "422521832245",
  appId: "1:422521832245:web:e324782c1f1eced365c27c",
  measurementId: "G-PYGCYLK7P6"
};

// Initialize Firebase
const app = firebase(firebaseConfig);
const analytics = getAnalytics(app);

  