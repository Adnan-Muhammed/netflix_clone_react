

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";







const firebaseConfig = {
  apiKey: "AIzaSyAV2e1m1TJORMk1ph9PZmSN8ysOLMsz0Rg",
  authDomain: "netflix-clone-react-ac857.firebaseapp.com",
  projectId: "netflix-clone-react-ac857",
  storageBucket: "netflix-clone-react-ac857.appspot.com",
  messagingSenderId: "207430115240",
  appId: "1:207430115240:web:4f8153e431c52ed778079d",
  measurementId: "G-C9MN9MVEEX"
};

console.log('Firebase Configuration:', firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const analytics = getAnalytics(app); // its not work in node js



