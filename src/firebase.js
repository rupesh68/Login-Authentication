import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkUbuWthyLFswQYpj_mMYLeBLYOp6sDn8",
  authDomain: "loginauth-d2b4c.firebaseapp.com",
  projectId: "loginauth-d2b4c",
  storageBucket: "loginauth-d2b4c.appspot.com",
  messagingSenderId: "1075971555236",
  appId: "1:1075971555236:web:295daff8784dde50344b31",
  measurementId: "G-8T2SXK0JQM"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
