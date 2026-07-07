import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWPxvWlE-vFtS96ga7Sxwu-vKXYDgSnps",
  authDomain: "flowsync-ai-61da8.firebaseapp.com",
  projectId: "flowsync-ai-61da8",
  storageBucket: "flowsync-ai-61da8.firebasestorage.app",
  messagingSenderId: "69192154388",
  appId: "1:69192154388:web:5bab3954096af74d1c9601",
  measurementId: "G-L64H4BGMPS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;