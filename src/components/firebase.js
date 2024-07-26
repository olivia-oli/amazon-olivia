import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDcRzeAIaGdZZwA_x-Ofc96YN2CdmOF7GU",
    authDomain: "clone-2a7a6.firebaseapp.com",
    projectId: "clone-2a7a6",
    storageBucket: "clone-2a7a6.appspot.com",
    messagingSenderId: "951141740294",
    appId: "1:951141740294:web:4e49e79cfcef65d50a3887"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db =  firebaseApp.firestore();
const auth = firebase.auth();

export{db, auth};
