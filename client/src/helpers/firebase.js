import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getEvn } from "../../helpers/getEnv";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtQTJPpwHgdK3WLO2VP4tg9HStiY4oKYE",
  authDomain: "trolleypopstore.firebaseapp.com",
  projectId: "trolleypopstore",
  storageBucket: "trolleypopstore.firebasestorage.app",
  messagingSenderId: "163481279829",
  appId: "1:163481279829:web:e8beaffef51c0bfaa5a3dc",
  measurementId: "G-99J2FYJZVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }