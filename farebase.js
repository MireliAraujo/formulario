// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcwS82ieg_zR3fYjNENwMHe9VSoErpE1A",
  authDomain: "formulario-fbb4d.firebaseapp.com",
  projectId: "formulario-fbb4d",
  storageBucket: "formulario-fbb4d.appspot.com",
  messagingSenderId: "1065562462251",
  appId: "1:1065562462251:web:e783e3f14526a0f5da326e",
  measurementId: "G-WLS60KE474"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  export default app
