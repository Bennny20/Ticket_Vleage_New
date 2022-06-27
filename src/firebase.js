// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9RHymEIOZ9oY6bgmf-0IpWF1JakfTK-g",
  authDomain: "ticket-vleague.firebaseapp.com",
  projectId: "ticket-vleague",
  storageBucket: "ticket-vleague.appspot.com",
  messagingSenderId: "1054668279170",
  appId: "1:1054668279170:web:246503614bf8f82ee0d39b",
  measurementId: "G-HBBVW6REJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);