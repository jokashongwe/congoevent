// Import the functions you need from the SDKs you need
import { initializeApp, getApps  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};


//const analytics = getAnalytics(app);
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
// Initializing the Email/Password Auth
const provider = new EmailAuthProvider();
// Firebase File Storage
const storage = getStorage(app);
// Firebase Data Storage
const db = getFirestore(app);
// Firebase Auth
const auth = getAuth(app);

export { provider, auth, storage };
export default db;