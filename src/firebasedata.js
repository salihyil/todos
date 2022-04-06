import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMWpKZHA6Uva51zNxRb-LVTn12U1NZnfM",
  authDomain: "todo-app-cd111.firebaseapp.com",
  projectId: "todo-app-cd111",
  storageBucket: "todo-app-cd111.appspot.com",
  messagingSenderId: "45316260349",
  appId: "1:45316260349:web:b3c3be5cc4f24d69375994",
  measurementId: "G-Q8ZDCW6YBB",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

export { firebase, db };
