// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpBOUgQ0x3tSUTS-X2_1FscZt_GDsbxrA",
  authDomain: "portfolio3d-92615.firebaseapp.com",
  projectId: "portfolio3d-92615",
  storageBucket: "portfolio3d-92615.appspot.com",
  messagingSenderId: "173858539245",
  appId: "1:173858539245:web:b2228d2e0fae24090aeee4",
  measurementId: "G-7VXB8Q1SEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);