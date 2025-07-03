import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBxfB7a479Xf76mElezbR_mHhYz1RRIyVs",
  authDomain: "multileggedstore.firebaseapp.com",
  projectId: "multileggedstore",
  storageBucket: "multileggedstore.firebasestorage.app",
  messagingSenderId: "657945773034",
  appId: "1:657945773034:web:01b9ff441d2d1dcce2a893",
  measurementId: "G-H2KQMGKBHY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
