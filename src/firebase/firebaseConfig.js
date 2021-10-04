import { GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {FacebookAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBOTA5erh0rVtTD4CPYLraECSF-qqh04gY",
    authDomain: "as-24df3.firebaseapp.com",
    projectId: "as-24df3",
    storageBucket: "as-24df3.appspot.com",
    messagingSenderId: "120592670942",
    appId: "1:120592670942:web:ed5b6a1d9166dfc135a24f",
    measurementId: "G-462CY8HZMC"
  };

  const app = initializeApp(firebaseConfig);
const google =  new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export{
    app,
    google,
    facebook,
    db
}

