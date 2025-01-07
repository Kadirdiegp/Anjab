// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5hCZjl-Lfv4M8-V31Vks-4TF3rk7Q0y0",
  authDomain: "anja-2bc78.firebaseapp.com",
  projectId: "anja-2bc78",
  storageBucket: "anja-2bc78.firebasestorage.app",
  messagingSenderId: "295990065891",
  appId: "1:295990065891:web:ebb811017cd3f7c036e3d6",
  measurementId: "G-T0QL1P219T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only if cookies are accepted
let analytics: Analytics | null = null;
const initializeAnalytics = () => {
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');
  if (cookiesAccepted === 'true') {
    analytics = getAnalytics(app);
  }
};

// Check cookie consent status on load
initializeAnalytics();

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export { analytics, initializeAnalytics };
export default app;