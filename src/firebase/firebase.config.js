// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaKtC31XGYD-OqaIDh1e9krAmNgql63U4",
  authDomain: "the-news-dragon-client-ec11a.firebaseapp.com",
  projectId: "the-news-dragon-client-ec11a",
  storageBucket: "the-news-dragon-client-ec11a.appspot.com",
  messagingSenderId: "391126071171",
  appId: "1:391126071171:web:22ae940dc8b206988da8b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;