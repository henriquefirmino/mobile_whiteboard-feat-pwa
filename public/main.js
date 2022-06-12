// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD_4vVecWVw1-QlY6vKO07OSJOXhIhVTQ",
  authDomain: "whiteboard-colaborativo.firebaseapp.com",
  projectId: "whiteboard-colaborativo",
  storageBucket: "whiteboard-colaborativo.appspot.com",
  messagingSenderId: "661298694877",
  appId: "1:661298694877:web:e0663ccdac3d1a0ab06934",
  measurementId: "G-JZ5FN436CK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

window.addEventListener('load', () => {
    register()
})

async function register(){
    if('serviceWorker' in navigator){
        try {
            await navigator.serviceWorker.register('./sw.js')
        }catch(error) {
            console.error('SW registration failed')
        }
    }
}