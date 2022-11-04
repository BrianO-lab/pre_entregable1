// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Ri-3yn3ZOeeZayg5j4aWXHQ99Qpx82U",
  authDomain: "react-js-final.firebaseapp.com",
  projectId: "react-js-final",
  storageBucket: "react-js-final.appspot.com",
  messagingSenderId: "601764676555",
  appId: "1:601764676555:web:c143b4b8b2e888277fec4e"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;