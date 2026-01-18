// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuM4C9dJ934F-5D6-yH3Fo23aAGx2gmPs",
  authDomain: "modern-web-technologies.firebaseapp.com",
  projectId: "modern-web-technologies",
  storageBucket: "modern-web-technologies.firebasestorage.app",
  messagingSenderId: "752411096276",
  appId: "1:752411096276:web:54eeb021eaf80090953741",
  measurementId: "G-5XNL9XQ930"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics only in browser environment
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then(yes => yes ? analytics = getAnalytics(app) : null);
}
export { analytics };

export default app;
