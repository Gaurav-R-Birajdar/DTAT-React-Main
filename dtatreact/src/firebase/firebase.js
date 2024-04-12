import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdFrEGQNlKAroj4TD7DdcAjW8LlfDStJU",
  authDomain: "dtat-react.firebaseapp.com",
  projectId: "dtat-react",
  storageBucket: "dtat-react.appspot.com",
  messagingSenderId: "350383106733",
  appId: "1:350383106733:web:e38e00bfb5566f4555f424",
  measurementId: "G-P4C53NSFPT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
